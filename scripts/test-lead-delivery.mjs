// Run: node scripts/test-lead-delivery.mjs — no external submissions.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const context = {
  exports: {}, FormData, Response, Request, Headers, URL, URLSearchParams, console,
  process: { env: { SPLITFORMS_ACCESS_KEY: 'test-public-form' } },
  require: (name) => name === '@/lib/site' ? { site: { url: 'https://callcenterstaffing.net' } } : require(name),
  fetch: async () => { throw new Error('Server must not submit to provider'); },
};
function load(file) {
  context.exports = {};
  const source = readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
  runInNewContext(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText, context);
  return context.exports;
}
const { POST } = load('app/api/lead/route.ts');
const fields = { name: 'Test lead', email: 'test@example.com', agentCount: '1-9', 'g-recaptcha-response': 'test-captcha' };
const body = { source: 'HeroQuoteForm', subject: 'Test only', renderedAt: Date.now() - 5000, fields };
let ip = 0;
const request = (value = body, origin = 'https://callcenterstaffing.net', address = String(++ip)) => new Request('https://callcenterstaffing.net/api/lead', {
  method: 'POST', headers: { origin, host: 'callcenterstaffing.net', 'x-real-ip': address, 'Content-Type': 'application/json' },
  body: JSON.stringify(value),
});
const response = await POST(request());
const prepared = await response.json();
assert.equal(response.status, 200);
assert.equal(prepared.ready, true);
assert.equal(prepared.success, undefined);
assert.equal(prepared.payload.access_key, 'test-public-form');
assert.equal(prepared.payload['g-recaptcha-response'], 'test-captcha');
for (const invalid of [
  { ...body, companyWebsite: 'spam' }, { ...body, renderedAt: Date.now() },
  { ...body, fields: { ...fields, email: 'invalid' } },
  { ...body, fields: { ...fields, 'g-recaptcha-response': '' } },
]) assert.equal((await POST(request(invalid))).status, 400);
assert.equal((await POST(request(body, 'https://untrusted.example'))).status, 403);
for (let i = 0; i < 9; i++) assert.equal((await POST(request(body, undefined, 'rate-test'))).status, i < 8 ? 200 : 429);
assert.equal((await POST(request({ ...body, source: 'StaffingPlanForm', fields: { ...fields, roleType: 'inbound-cs' } }))).status, 200);
assert.equal((await POST(request({ ...body, source: 'NewsletterForm', fields: { email: fields.email } }))).status, 200);

const { submitLead } = load('lib/lead-client.ts');
for (const outcome of ['accepted', 'denied', 'html', 'false-success']) {
  let calls = 0;
  context.fetch = async (url, options) => {
    calls++;
    if (calls === 1) {
      assert.equal(url, '/api/lead');
      assert.equal('company' in JSON.parse(options.body).fields, false);
      return Response.json(prepared);
    }
    assert.equal(url, 'https://splitforms.com/api/submit');
    assert.equal(options.headers.Origin, undefined);
    assert.deepEqual(JSON.parse(options.body), prepared.payload);
    if (outcome === 'html') return new Response('<html>Error</html>');
    return Response.json({ success: outcome === 'accepted' || outcome === 'denied' }, { status: outcome === 'denied' ? 403 : 200 });
  };
  const run = () => submitLead({ ...body, fields: { ...fields, company: '' } });
  if (outcome === 'accepted') assert.equal((await run()).success, true);
  else await assert.rejects(run);
  assert.equal(calls, 2);
}
context.fetch = async (url) => {
  assert.equal(url, '/api/lead');
  return Response.json({ success: false }, { status: 400 });
};
await assert.rejects(() => submitLead(body));
console.log('PASS: validation, timing, honeypot, rate limit, all form types and confirmed browser delivery.');
