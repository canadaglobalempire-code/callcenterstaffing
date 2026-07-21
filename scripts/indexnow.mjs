#!/usr/bin/env node
/**
 * Submit URLs to IndexNow (Bing, Yandex, Seznam, Naver).
 *
 * Google does not use IndexNow. This is for Bing — which also feeds Microsoft
 * Copilot citations, so it matters more than raw Bing search share suggests.
 *
 * Usage:
 *   node scripts/indexnow.mjs                 # submit every URL in the sitemap
 *   node scripts/indexnow.mjs /blog/foo /bar  # submit specific paths
 *
 * The key file must be live at https://www.callcenterstaffing.net/<KEY>.txt
 * before submitting, or the endpoint returns 403.
 */

const KEY = '23d51e2afe8d4c0da90ccf3f4e355529';
const HOST = 'www.callcenterstaffing.net';
const ORIGIN = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/IndexNow';

async function sitemapUrls() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length
    ? args.map((a) => (a.startsWith('http') ? a : `${ORIGIN}${a.startsWith('/') ? a : `/${a}`}`))
    : await sitemapUrls();

  // Verify the key file is reachable first — the most common cause of a 403.
  const keyCheck = await fetch(`${ORIGIN}/${KEY}.txt`);
  if (!keyCheck.ok) {
    console.error(`Key file not live at ${ORIGIN}/${KEY}.txt (${keyCheck.status}).`);
    console.error('Deploy first, then re-run.');
    process.exit(1);
  }

  console.log(`Submitting ${urlList.length} URLs to IndexNow...`);

  // IndexNow accepts up to 10,000 URLs per request; chunk anyway to stay polite.
  const CHUNK = 1000;
  for (let i = 0; i < urlList.length; i += CHUNK) {
    const urlListChunk = urlList.slice(i, i + CHUNK);
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList: urlListChunk }),
    });
    // 200 = accepted, 202 = accepted pending key validation.
    console.log(`  chunk ${i / CHUNK + 1}: ${res.status} ${res.statusText}`);
    if (!res.ok && res.status !== 202) console.error(`  body: ${await res.text()}`);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
