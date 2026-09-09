import type { Location } from './types';

/**
 * Supply-market location pages — countries we recruit agents in that were not
 * yet covered by `locations.ts`. Several of these already have a ranking
 * `/blog/top-15-bpo-companies-in-*` listicle with no staffing page to point at;
 * these are the bridge targets for `BPO_STAFFING_LINK` in `posts.ts`.
 *
 * `region` is expressed from the perspective of a US buyer, matching the
 * existing entries in `locations.ts`.
 */
export const SUPPLY_MARKET_LOCATIONS: Location[] = [
  {
    slug: 'india',
    name: 'India',
    region: 'offshore',
    flagEmoji: '🇮🇳',
    heroImage: '/images/hd-agents-working.jpg',
    metaTitle: 'India Call Center Staffing | BPO Agents in Bengaluru & NCR',
    metaDescription:
      'India call center staffing across Bengaluru, Hyderabad, Pune, NCR and Chennai. Voice, chat, back-office and technical support agents, on our payroll.',
    hero: {
      eyebrow: 'India · Offshore',
      headline: 'The deepest offshore bench in the world — if you hire for the right city.',
      subhead:
        'India is not one labour market, it is eight. We recruit against the city that actually produces your role, from Bengaluru technical support to NCR outbound to Coimbatore back-office.',
    },
    whyHere: [
      {
        title: 'Scale nobody else can match',
        body: 'India’s business-process sector employs well over a million people and adds capacity every quarter. For programs that need 200+ seats, or need to double headcount in a quarter without exhausting the local pool, no other market absorbs that demand as reliably.',
      },
      {
        title: 'Technical depth, not just voice',
        body: 'Bengaluru, Hyderabad and Pune produce advisors with genuine technical literacy — engineering graduates working tier-2 SaaS support, not scripted tier-1. For product-heavy support queues this is India’s real advantage, and it is chronically underused.',
      },
      {
        title: 'Cost efficiency at the bottom of the market',
        body: 'India runs at the low end of global loaded agent cost while sustaining a mature training, QA and WFM infrastructure. The combination — cheap and structurally competent — exists in very few markets.',
      },
      {
        title: 'Native UK-hours coverage',
        body: 'IST is 4.5 to 5.5 hours ahead of London. Indian teams cover a full UK working day on a day shift, which is why UK buyers get better retention and quality out of India than US buyers running the same market on nights.',
      },
    ],
    talentSnapshot: {
      talentPoolSize: '~1.5M business-process workers',
      avgEnglishProficiency: 'B2–C1 (CEFR)',
      avgTenure: '~1.7 years (industry-weighted)',
      timeZones: ['IST (UTC+5:30)', 'covers UK/EU on day shift, US on night shift'],
      languages: ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Bengali', 'Marathi'],
    },
    cities: [
      { name: 'Bengaluru', note: 'Technical and SaaS support, strongest engineering-adjacent pool' },
      { name: 'Hyderabad', note: 'Enterprise CX scale, healthcare and fintech back-office' },
      { name: 'Pune', note: 'Lower attrition than NCR, strong written-English bench' },
      { name: 'Gurugram / Noida (NCR)', note: 'Outbound sales, collections, senior ops leadership' },
      { name: 'Chennai', note: 'Back-office and finance-and-accounting depth' },
      { name: 'Coimbatore', note: 'Cost-efficient, lowest attrition of the major hubs' },
    ],
    rolesAvailable: [
      'inbound-customer-service',
      'outbound-sales-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'trainers',
      'operations-managers',
    ],
    faqs: [
      {
        q: 'Is Indian-accented English a problem for US customers?',
        a: 'It depends entirely on the queue and on screening. For technical support, back-office, chat and email, accent is largely irrelevant and India is often the best value in the world. For consumer-facing voice queues in the US, customer resistance is real and measurable — we screen hard for accent neutrality and will tell you when the Philippines or nearshore is the better call rather than placing agents who will fail your CSAT target.',
      },
      {
        q: 'Why does city choice matter so much in India?',
        a: 'Because the cities specialise. Bengaluru produces technically literate advisors at a premium; NCR produces aggressive outbound and collections talent; Chennai and Coimbatore produce back-office and finance depth at the lowest cost. Recruiting for a technical queue in an outbound city means paying more for a worse fit. Most disappointing India programs are city-selection failures, not country-selection failures.',
      },
      {
        q: 'How bad is attrition, really?',
        a: 'High — the sector runs materially above global averages, and anyone quoting you single-digit attrition is quoting a pilot, not a program. We plan for it: cohort-based hiring, a warm bench, and replacement SLAs written into the engagement so a resignation is a scheduling event rather than a service outage.',
      },
      {
        q: 'Can you staff India for UK and European hours?',
        a: 'Yes, and it is the strongest structural case for India. UK coverage runs on an Indian day shift, which means better candidates, better retention and lower shift premiums than the same program run for US nights. Continental Europe works similarly.',
      },
      {
        q: 'What about data protection for regulated work?',
        a: 'India hosts a great deal of regulated financial and healthcare work under established contractual and technical controls. We screen for prior regulated-environment experience and can align to your control framework. The transfer mechanisms, processing agreements and your own regulatory position remain your legal team’s call — we staff to whatever constraints they set.',
      },
    ],
  },
  {
    slug: 'egypt',
    name: 'Egypt',
    region: 'offshore',
    flagEmoji: '🇪🇬',
    heroImage: '/images/cc-team-row-2.jpg',
    metaTitle: 'Egypt Call Center Staffing | Arabic & European Language Agents',
    metaDescription:
      'Egypt call center staffing in Cairo, Giza and Alexandria. Arabic-English bilingual agents plus French, German and Italian European-language support.',
    hero: {
      eyebrow: 'Egypt · Offshore',
      headline: 'Arabic depth and European languages, at a fraction of European cost.',
      subhead:
        'Cairo is the most underrated multilingual CX market in the world — a large Arabic-English pool plus genuine French, German and Italian capability, all on a European time zone.',
    },
    whyHere: [
      {
        title: 'The largest Arabic-English pool anywhere',
        body: 'Egypt’s population and its long-established language-school system produce Arabic-English bilingual advisors at a volume and cost no Gulf market can approach. For Arabic-language support at scale, this is the answer.',
      },
      {
        title: 'Real European-language capability',
        body: 'French, German, Italian and Spanish are taught seriously in Egyptian universities and language schools, producing C1 speakers at a cost far below Poland or Portugal. For European CX queues that cannot justify an EU cost base, Cairo is the strongest value in the market.',
      },
      {
        title: 'One time zone from Europe',
        body: 'Cairo runs UTC+2 — the same working day as Central Europe and one hour ahead of the UK. European support runs on a day shift with no night premium and no follow-the-sun handoff.',
      },
      {
        title: 'Government-backed sector investment',
        body: 'Egypt has invested heavily in outsourcing as a national growth sector, with dedicated infrastructure and training pipelines. That translates to real depth in QA, WFM and training leadership, not just frontline headcount.',
      },
    ],
    talentSnapshot: {
      talentPoolSize: '~100,000 contact-centre & BPO workers',
      avgEnglishProficiency: 'B2–C1 (CEFR)',
      avgTenure: '~2.0 years (industry-weighted)',
      timeZones: ['EET (UTC+2)', 'native EU/UK day-shift coverage'],
      languages: ['Arabic', 'English', 'French', 'German', 'Italian', 'Spanish'],
    },
    cities: [
      { name: 'Cairo', note: 'Deepest multilingual pool, all languages, senior ops bench' },
      { name: 'Smart Village', note: 'Established outsourcing cluster, enterprise-grade sites' },
      { name: 'New Cairo', note: 'Growing capacity, strong graduate intake' },
      { name: 'Giza', note: 'Cost-efficient, large Arabic-English frontline pool' },
      { name: 'Alexandria', note: 'Lower cost than Cairo, good European-language bench' },
    ],
    rolesAvailable: [
      'bilingual-agents',
      'inbound-customer-service',
      'outbound-sales-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
    ],
    faqs: [
      {
        q: 'How does Egypt compare with the UAE for Arabic support?',
        a: 'Egypt is far cheaper and far deeper. The UAE wins on Gulf dialect specifically and on having advisors who know the local market first-hand — which matters for Gulf enterprise and government accounts. For volume Arabic support across MENA, Egypt is usually the better economics by a wide margin.',
      },
      {
        q: 'Is Egyptian Arabic understood across the region?',
        a: 'Widely, yes — Egyptian Arabic is the most broadly understood dialect in the Arab world because of decades of Egyptian film and television. That said, for Gulf-specific customer bases we screen for advisors who can adapt register toward Gulf dialect, and we will tell you when a Gulf-native advisor is the safer choice.',
      },
      {
        q: 'Is European-language quality genuinely competitive with Poland?',
        a: 'On cost, Egypt wins clearly. On language quality, Poland and Portugal have a deeper native-speaker population, so for premium sales or complaint-stage work in German or French they remain stronger. For tier-1 and tier-2 support in those languages, Egypt is consistently good enough and materially cheaper. We screen every candidate with a native reviewer and send you the recording.',
      },
      {
        q: 'What ramp timeline should we expect?',
        a: 'First shortlist in about 72 hours. English and Arabic cohorts of 10–25 typically place in 3–4 weeks. European-language cohorts run longer — usually 4–6 weeks — because we screen the language bar rather than filling to a date.',
      },
    ],
  },
  {
    slug: 'kenya',
    name: 'Kenya',
    region: 'offshore',
    flagEmoji: '🇰🇪',
    heroImage: '/images/cc-support-team.jpg',
    metaTitle: 'Kenya Call Center Staffing | Nairobi BPO & Support Agents',
    metaDescription:
      'Kenya call center staffing in Nairobi and Mombasa. Neutral-accent English agents on EAT, covering UK and European hours. On our payroll, pay for hours worked.',
    hero: {
      eyebrow: 'Kenya · Offshore',
      headline: 'Neutral-accent English on European hours, from Africa’s fastest-growing CX market.',
      subhead:
        'Nairobi produces graduate-level, neutral-accent English advisors at a cost well below South Africa — and sits on a time zone that covers the UK and Europe without a night shift.',
    },
    whyHere: [
      {
        title: 'Neutral accent, high education level',
        body: 'English is an official language of instruction throughout Kenyan education, producing advisors who speak it as a working language rather than a learned second one. Accent neutrality for UK and European ears is high, with a large graduate intake.',
      },
      {
        title: 'Materially cheaper than South Africa',
        body: 'Kenya runs well below South African loaded cost for comparable English quality on general CX work. For UK and European buyers priced out of Cape Town, Nairobi is the obvious next step rather than a leap to Asia.',
      },
      {
        title: 'EAT covers Europe on a day shift',
        body: 'UTC+3 puts Nairobi two to three hours ahead of London and one to two ahead of Central Europe. A full European working day is covered inside normal Kenyan business hours — better candidates, better retention, no shift premium.',
      },
      {
        title: 'A young, digitally native workforce',
        body: 'Kenya’s mobile-money and fintech maturity produced a workforce comfortable with digital-first service, chat and app-based support. For fintech, mobility and marketplace support queues this is a real fit rather than a generic pitch.',
      },
    ],
    talentSnapshot: {
      talentPoolSize: '~30,000 contact-centre & BPO workers',
      avgEnglishProficiency: 'C1 (official language of instruction)',
      avgTenure: '~1.8 years (industry-weighted)',
      timeZones: ['EAT (UTC+3)', 'native UK/EU day-shift coverage'],
      languages: ['English', 'Swahili', 'French (limited)'],
    },
    cities: [
      { name: 'Nairobi', note: 'Primary hub, graduate intake, fintech and digital CX depth' },
      { name: 'Mombasa', note: 'Lower cost, travel and hospitality experience' },
      { name: 'Nakuru', note: 'Emerging capacity, low attrition' },
      { name: 'Kisumu', note: 'Cost-efficient, growing graduate pipeline' },
    ],
    rolesAvailable: [
      'inbound-customer-service',
      'outbound-sales-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'trainers',
    ],
    faqs: [
      {
        q: 'Is Kenya mature enough for an enterprise program?',
        a: 'For frontline CX, chat and back-office at up to a few hundred seats, yes. Where Kenya is still thinner than South Africa or the Philippines is the senior layer — WFM leads, QA managers and operations directors with a decade of enterprise CX behind them. We usually recommend importing or promoting that layer deliberately rather than assuming the market supplies it.',
      },
      {
        q: 'How does Kenya compare with South Africa for UK support?',
        a: 'South Africa has deeper CX maturity, a larger senior bench and closer cultural affinity with UK customers, at a higher cost. Kenya is cheaper with genuinely strong English and a younger workforce. For cost-sensitive tier-1 volume, Kenya. For complaint-stage, regulated or premium brand work, South Africa. Many UK programs we staff use both.',
      },
      {
        q: 'Does infrastructure reliability affect uptime?',
        a: 'In established Nairobi sites, power and connectivity redundancy are standard and uptime is not a practical concern. Outside the main hubs it needs checking site by site. Because we place agents into sites rather than operating them, we will be direct about which locations we would and would not staff for a follow-the-sun-critical queue.',
      },
      {
        q: 'What is the realistic ramp timeline?',
        a: 'First shortlist in about 72 hours, with 10–25 seats typically live in 3–4 weeks. The graduate pipeline is deep enough that first-cohort fill rates are strong; the constraint is usually site capacity rather than candidates.',
      },
    ],
  },
  {
    slug: 'jamaica',
    name: 'Jamaica',
    region: 'nearshore',
    flagEmoji: '🇯🇲',
    heroImage: '/images/cc-woman-headset.jpg',
    metaTitle: 'Jamaica Call Center Staffing | Native-English Nearshore Agents',
    metaDescription:
      'Jamaica nearshore call center staffing in Kingston, Montego Bay and Portmore. Native-English agents never more than an hour off US Eastern, on our payroll.',
    hero: {
      eyebrow: 'Jamaica · Nearshore',
      headline: 'Native English, and never more than an hour off US Eastern.',
      subhead:
        'Jamaica gives US programs native-English advisors, cultural familiarity with US customers, and a time zone that stays aligned to ET all year. Kingston and Montego Bay, on our payroll.',
    },
    whyHere: [
      {
        title: 'Native English, not screened-for English',
        body: 'English is Jamaica’s official language. Advisors are not screened up to a proficiency bar — they arrive with it. For US consumer voice queues this removes the single largest source of nearshore quality risk.',
      },
      {
        title: 'A fixed clock, always within an hour of Eastern',
        body: 'Jamaica holds UTC-5 all year. Because the US moves to daylight saving and Jamaica does not, the island matches US Eastern through the winter and sits an hour behind it — level with US Central — from March to November. The offset moves by an hour, never more, so no queue ever needs a night rota to reach your customers.',
      },
      {
        title: 'Deep US cultural familiarity',
        body: 'Sustained exposure to US media, close family ties to US communities and two decades of serving US brands mean advisors understand American idiom, expectation and humour without training for it. Rapport is faster.',
      },
      {
        title: 'A mature, purpose-built sector',
        body: 'Jamaica’s outsourcing sector has been serving US clients for over twenty years, with established site infrastructure in Kingston and Montego Bay and a workforce that treats CX as a career rather than a stopgap.',
      },
    ],
    talentSnapshot: {
      talentPoolSize: '~55,000 contact-centre workers',
      avgEnglishProficiency: 'C2 (official language)',
      avgTenure: '~2.2 years (industry-weighted)',
      timeZones: ['UTC-5 year-round', 'US Eastern in winter, one hour behind it in summer'],
      languages: ['English (native)', 'Jamaican Patois', 'Spanish (limited)'],
    },
    cities: [
      { name: 'Montego Bay', note: 'Largest CX cluster, deepest frontline pool' },
      { name: 'Kingston', note: 'Senior leadership, QA and operations bench' },
      { name: 'Portmore', note: 'Cost-efficient capacity, strong tenure' },
      { name: 'Ocho Rios', note: 'Travel and hospitality CX experience' },
      { name: 'Mandeville', note: 'Emerging hub, lower attrition' },
    ],
    rolesAvailable: [
      'inbound-customer-service',
      'outbound-sales-agents',
      'team-leads-supervisors',
      'qa-analysts',
      'trainers',
    ],
    faqs: [
      {
        q: 'Will US customers notice a Jamaican accent?',
        a: 'Often yes, but it reads as a familiar, warm English accent rather than a foreign-language one — which is a materially different customer reaction from most offshore alternatives. We screen for register and clarity, and send you a recorded voice sample with every shortlisted advisor so you can judge against your own brand bar.',
      },
      {
        q: 'How does Jamaica compare with the Philippines on cost?',
        a: 'Jamaica runs above the Philippines on loaded cost. You are paying for native English, ET alignment and a two-hour flight from Miami rather than a fifteen-hour one. For US consumer voice work where accent resistance is a live CSAT risk, that premium usually pays for itself. For 24/7 volume at the lowest cost, the Philippines wins.',
      },
      {
        q: 'Can Jamaica support bilingual Spanish queues?',
        a: 'Not at depth — Spanish capability exists but is thin, and we would not staff a bilingual program here. For Spanish-English work, Mexico, Colombia, Guatemala or the Dominican Republic are the right markets. Jamaica is an English-first play.',
      },
      {
        q: 'What about hurricane-season continuity?',
        a: 'A real planning consideration, and one we address up front rather than after the fact. Most established sites carry redundancy and continuity plans, and for weather-sensitive programs we recommend splitting the cohort across Jamaica and a mainland nearshore market so a single storm never takes the whole queue down.',
      },
    ],
  },
  {
    slug: 'dominican-republic',
    name: 'Dominican Republic',
    region: 'nearshore',
    flagEmoji: '🇩🇴',
    heroImage: '/images/cc-agent-headset.jpg',
    metaTitle: 'Dominican Republic Call Center Staffing | Bilingual Nearshore',
    metaDescription:
      'Dominican Republic nearshore call center staffing in Santo Domingo and Santiago. Bilingual Spanish-English agents on US Eastern time, on our payroll.',
    hero: {
      eyebrow: 'Dominican Republic · Nearshore',
      headline: 'Bilingual nearshore on Eastern time, at Caribbean cost.',
      subhead:
        'Santo Domingo and Santiago give US programs Spanish-English bilingual advisors one time zone from New York — the cheapest genuinely ET-aligned bilingual pool in the Americas.',
    },
    whyHere: [
      {
        title: 'Eastern-time bilingual, priced below Mexico',
        body: 'The DR sits on AST — effectively ET for most of the year — with loaded costs below Mexico for comparable bilingual quality. For US East Coast programs that need Spanish coverage on their own clock, this is the value option.',
      },
      {
        title: 'Diaspora-driven US familiarity',
        body: 'Extensive family and migration ties to New York, New Jersey and Florida mean a large share of advisors have lived in or visited the US. US idiom, expectation and Spanish-English code-switching come naturally.',
      },
      {
        title: 'Caribbean Spanish that matches US Hispanic customers',
        body: 'Dominican Spanish aligns closely with the Caribbean-Spanish norms of large US Hispanic populations in the Northeast and Florida — a better cultural match for those customer bases than Mexican or South American Spanish.',
      },
      {
        title: 'Free-zone infrastructure built for outsourcing',
        body: 'The DR’s free-trade-zone regime has supported CX operations for two decades, giving mature site infrastructure, established connectivity redundancy and a workforce familiar with US service standards.',
      },
    ],
    talentSnapshot: {
      talentPoolSize: '~70,000 contact-centre workers',
      avgEnglishProficiency: 'B2–C1 (CEFR)',
      avgTenure: '~2.0 years (industry-weighted)',
      timeZones: ['AST (UTC-4)', 'ET-aligned most of the year'],
      languages: ['Spanish (native)', 'English', 'Haitian Creole (limited)'],
    },
    cities: [
      { name: 'Santo Domingo', note: 'Largest pool, senior ops bench, bilingual depth' },
      { name: 'Santiago', note: 'Lower cost than the capital, strong tenure' },
      { name: 'Puerto Plata', note: 'Travel and hospitality CX experience' },
      { name: 'La Romana', note: 'Emerging capacity, cost-efficient' },
    ],
    rolesAvailable: [
      'bilingual-agents',
      'inbound-customer-service',
      'outbound-sales-agents',
      'team-leads-supervisors',
      'qa-analysts',
    ],
    faqs: [
      {
        q: 'How does English proficiency compare with Mexico or Colombia?',
        a: 'Broadly comparable at the top of the market, thinner in the middle. The DR produces excellent bilingual advisors, but the pool of strong English speakers is smaller than Mexico’s in absolute terms, so large English-heavy ramps take longer to fill. For Spanish-dominant queues with English as the secondary, it is extremely competitive.',
      },
      {
        q: 'Is Dominican Spanish an issue for Mexican-American customers?',
        a: 'Occasionally, on register and idiom rather than comprehension. If your Hispanic customer base is concentrated in the Southwest or California, Mexico is the better cultural match. If it is Northeast or Florida-weighted, the DR is often the stronger one. We will ask where your customers are before recommending a market.',
      },
      {
        q: 'What is the cost difference against Mexico?',
        a: 'The DR typically runs below Mexico on loaded cost for comparable bilingual roles, with the gap narrowing at senior levels where the pool thins. We benchmark both in the written plan rather than asserting a percentage that will be out of date by the time you read it.',
      },
      {
        q: 'How fast can you ramp there?',
        a: 'First shortlist in about 72 hours. Bilingual cohorts of 10–25 typically place in 3–4 weeks. English-dominant cohorts run longer because the pool is shallower — we will tell you that before you commit to a date, not after.',
      },
    ],
  },
  {
    slug: 'guatemala',
    name: 'Guatemala',
    region: 'nearshore',
    flagEmoji: '🇬🇹',
    heroImage: '/images/cc-agent-desk.jpg',
    metaTitle: 'Guatemala Call Center Staffing | Bilingual Central America',
    metaDescription:
      'Guatemala nearshore call center staffing in Guatemala City. Bilingual Spanish-English agents on US Central time, on our payroll, pay only for hours worked.',
    hero: {
      eyebrow: 'Guatemala · Nearshore',
      headline: 'Central-time bilingual staffing, without Mexico’s wage pressure.',
      subhead:
        'Guatemala City holds a fixed UTC-6 clock with a young bilingual workforce and loaded costs below the established Mexican hubs — the value end of nearshore Latin America.',
    },
    whyHere: [
      {
        title: 'A fixed UTC-6 clock, an hour either side of US Central',
        body: 'Guatemala holds UTC-6 all year. The US shifts and Guatemala does not, so it matches US Central through the winter and runs an hour behind it during daylight saving. That is a one-hour scheduling adjustment twice a year, not the rota rebuild an offshore program needs.',
      },
      {
        title: 'Below Mexican hub cost',
        body: 'Sustained nearshore demand has pushed wages up in Guadalajara, Monterrey and Tijuana. Guatemala City has not seen the same pressure, so comparable bilingual advisors cost materially less — the main reason programs move here from Mexico.',
      },
      {
        title: 'A young, returning-migrant bilingual pool',
        body: 'A significant share of strong English speakers are returning migrants who lived and worked in the US. Their English is practical and idiomatic rather than classroom-taught, and their US cultural familiarity is first-hand.',
      },
      {
        title: 'Low attrition relative to the region',
        body: 'CX work is a competitive, well-regarded career path in Guatemala City rather than one option among many. Retention tends to run better than in saturated nearshore hubs where advisors change employer for small wage increments.',
      },
    ],
    talentSnapshot: {
      talentPoolSize: '~40,000 contact-centre workers',
      avgEnglishProficiency: 'B2–C1 (CEFR)',
      avgTenure: '~2.1 years (industry-weighted)',
      timeZones: ['UTC-6 year-round', 'US Central, one hour behind in summer'],
      languages: ['Spanish (native)', 'English', 'K’iche’ and Mayan languages (limited)'],
    },
    cities: [
      { name: 'Guatemala City', note: 'Primary hub, full bilingual and leadership depth' },
      { name: 'Mixco', note: 'Adjacent capacity, cost-efficient frontline pool' },
      { name: 'Villa Nueva', note: 'Growing capacity, strong tenure' },
      { name: 'Quetzaltenango', note: 'Emerging hub, lowest loaded cost' },
    ],
    rolesAvailable: [
      'bilingual-agents',
      'inbound-customer-service',
      'outbound-sales-agents',
      'team-leads-supervisors',
      'qa-analysts',
    ],
    faqs: [
      {
        q: 'Is the bilingual pool deep enough for a large ramp?',
        a: 'For cohorts up to roughly 100 seats, yes. Beyond that the strong-English pool tightens and fill rates slow noticeably. For larger bilingual builds we recommend splitting across Guatemala and Mexico or Colombia rather than exhausting one market and watching quality drift down as you scale.',
      },
      {
        q: 'How does Guatemala compare with Colombia?',
        a: 'Colombia has a larger pool, deeper senior bench and stronger accent-neutrality at the top end, at a higher cost. Guatemala is cheaper with better CST alignment and less wage inflation. For Central-time programs under about 100 seats, Guatemala is frequently the better economics.',
      },
      {
        q: 'Can you staff licensed or regulated roles here?',
        a: 'For US-licensed work — NMLS, state insurance, FINRA — no; those pipelines are onshore. We staff HIPAA-aware and PCI-adjacent queues in Guatemala with appropriate screening and training, but where a US license is the requirement we will point you to the United States rather than improvise.',
      },
      {
        q: 'What ramp timeline is realistic?',
        a: 'First shortlist in about 72 hours, with 10–25 bilingual seats typically live in 3–4 weeks. Larger cohorts run in waves of 25 so quality is held constant rather than diluted to hit a headcount date.',
      },
    ],
  },
  {
    slug: 'costa-rica',
    name: 'Costa Rica',
    region: 'nearshore',
    flagEmoji: '🇨🇷',
    heroImage: '/images/cc-team-work.jpg',
    metaTitle: 'Costa Rica Call Center Staffing | Bilingual Nearshore Agents',
    metaDescription:
      'Costa Rica nearshore call center staffing in San José, Heredia and Cartago. High-proficiency bilingual agents for finance, tech and healthcare queues.',
    hero: {
      eyebrow: 'Costa Rica · Nearshore',
      headline: 'The quality end of nearshore — where complex queues actually work.',
      subhead:
        'Costa Rica trades cost for capability: the highest English proficiency in Central America, a stable professional workforce, and genuine depth in finance, tech and healthcare support.',
    },
    whyHere: [
      {
        title: 'The strongest English in Central America',
        body: 'Decades of investment in bilingual education and a long-established multinational services sector produce advisors at the top of the regional proficiency range. For complex, consultative or escalation-stage conversations this is where nearshore stops being a compromise.',
      },
      {
        title: 'Built for complex queues, not volume',
        body: 'Multinational shared-services centres have trained a generation of Costa Rican professionals in finance, compliance, healthcare administration and technical support. The bench for tier-2 and specialist roles is deeper than anywhere else in the region.',
      },
      {
        title: 'Political and institutional stability',
        body: 'A long-standing democracy with strong institutions, high education levels and reliable infrastructure. For programs where continuity risk is weighted heavily in the location decision, Costa Rica consistently scores highest in the region.',
      },
      {
        title: 'CST coverage with low attrition',
        body: 'A fixed UTC-6 clock that never sits more than an hour from US Central, and retention that runs well above regional norms — advisors treat CX and shared-services work as a long-term profession, which shows up directly in tenure and quality consistency.',
      },
    ],
    talentSnapshot: {
      talentPoolSize: '~70,000 services & contact-centre workers',
      avgEnglishProficiency: 'C1 (highest in Central America)',
      avgTenure: '~2.8 years (industry-weighted)',
      timeZones: ['UTC-6 year-round', 'US Central, one hour behind in summer'],
      languages: ['Spanish (native)', 'English', 'Portuguese (limited)', 'French (limited)'],
    },
    cities: [
      { name: 'San José', note: 'Primary hub, senior and specialist roles' },
      { name: 'Heredia', note: 'Shared-services cluster, finance and tech depth' },
      { name: 'Cartago', note: 'Technical support, engineering-adjacent talent' },
      { name: 'Alajuela', note: 'Cost-efficient capacity near the airport corridor' },
      { name: 'Escazú', note: 'Enterprise and multinational leadership bench' },
    ],
    rolesAvailable: [
      'bilingual-agents',
      'inbound-customer-service',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'trainers',
      'operations-managers',
    ],
    faqs: [
      {
        q: 'Costa Rica is expensive for nearshore — when is it worth it?',
        a: 'When the queue is complex enough that agent quality drives your cost per resolution more than agent wage does. Tier-2 technical support, healthcare administration, financial services and escalation queues are where the premium pays back. For high-volume tier-1 it usually does not, and we will say so — Guatemala, Colombia or the DR are the better fit.',
      },
      {
        q: 'How does it compare with Colombia?',
        a: 'Colombia is larger and cheaper with a strong senior bench. Costa Rica has higher average English proficiency, better retention and deeper specialist experience from the multinational shared-services sector. Colombia for scale, Costa Rica for complexity — and plenty of programs use both.',
      },
      {
        q: 'Can you staff healthcare and HIPAA-aware queues?',
        a: 'Yes. Costa Rica has a mature pool of advisors with healthcare-administration and payer-side experience, and we screen for HIPAA training and prior PHI-handling environments. Your Business Associate Agreement coverage and legal position remain yours to confirm; we staff to whatever your compliance team requires.',
      },
      {
        q: 'What is attrition actually like?',
        a: 'Meaningfully better than the regional average. The combination of professional career framing, a stable multinational employer base and higher education levels produces tenure closer to onshore norms than to nearshore ones. It is one of the main reasons total program cost lands lower than the hourly rate suggests.',
      },
    ],
  },
  {
    slug: 'poland',
    name: 'Poland',
    region: 'offshore',
    flagEmoji: '🇵🇱',
    heroImage: '/images/cc-team-meeting.jpg',
    metaTitle: 'Poland Contact Centre Staffing | Multilingual European Support',
    metaDescription:
      'Poland contact centre staffing in Kraków, Warsaw and Wrocław. Multilingual European support in German, French, Nordic and Slavic languages, on our payroll.',
    hero: {
      eyebrow: 'Poland · European nearshore',
      headline: 'Europe’s multilingual engine room — German, Nordic and Slavic, on CET.',
      subhead:
        'Kraków, Warsaw and Wrocław host one of the world’s largest business-services clusters. For European CX in more than three languages, this is the default answer.',
    },
    whyHere: [
      {
        title: 'Language coverage no other market matches',
        body: 'German, French, Dutch, Italian, Spanish, Czech, Ukrainian, Russian and the Nordic languages are all staffable from Polish hubs — partly domestic, partly a large resident population of other-EU and Ukrainian speakers who moved for services work.',
      },
      {
        title: 'CET means genuine European nearshore',
        body: 'Poland runs on Central European Time. Same working day, same meeting calendar, same overlapping hours as your German, French and Nordic customers, with no follow-the-sun handoff and no shift premium.',
      },
      {
        title: 'EU jurisdiction end to end',
        body: 'Staff sit inside the EU, so GDPR intra-EU processing applies without third-country transfer mechanisms. For regulated European work this removes an entire category of legal complexity that non-EU delivery locations create.',
      },
      {
        title: 'A mature, professional services sector',
        body: 'Poland’s business-services sector employs hundreds of thousands across finance, IT and CX, producing a deep bench of team leads, QA managers and operations directors — not just frontline capacity.',
      },
    ],
    talentSnapshot: {
      talentPoolSize: '~400,000 business-services workers',
      avgEnglishProficiency: 'B2–C1 (CEFR)',
      avgTenure: '~2.5 years (industry-weighted)',
      timeZones: ['CET / CEST (UTC+1 / +2)'],
      languages: [
        'Polish',
        'English',
        'German',
        'French',
        'Italian',
        'Spanish',
        'Ukrainian',
        'Russian',
        'Czech',
        'Nordic languages',
      ],
    },
    cities: [
      { name: 'Kraków', note: 'Largest services cluster, deepest multilingual pool' },
      { name: 'Warsaw', note: 'Senior leadership, financial services, enterprise accounts' },
      { name: 'Wrocław', note: 'Strong German and Nordic bench, tech support depth' },
      { name: 'Gdańsk / Tricity', note: 'Nordic languages, lower attrition' },
      { name: 'Katowice', note: 'Cost-efficient capacity, growing language coverage' },
      { name: 'Łódź', note: 'Lowest loaded cost of the major hubs' },
    ],
    rolesAvailable: [
      'bilingual-agents',
      'inbound-customer-service',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'trainers',
      'operations-managers',
    ],
    faqs: [
      {
        q: 'Is Poland still cost-effective, or has it priced itself out?',
        a: 'It has moved up. Poland is no longer a low-cost market — wages in Kraków and Warsaw have risen substantially and it now sits mid-market globally. It remains far below Germany, the Nordics, Ireland or the UK for the same languages, which is the comparison that matters. If you need the cheapest possible German-language support, Egypt or Portugal will beat it.',
      },
      {
        q: 'How deep is the German-language bench really?',
        a: 'Deep and well established — German is the most-staffed foreign language in the Polish services sector, supported by proximity, education and a resident German-speaking population. Nordic languages are genuinely staffable but a much smaller pool, so those cohorts take longer and cost more per seat.',
      },
      {
        q: 'Has the Ukrainian situation affected staffing there?',
        a: 'It changed the labour market rather than destabilising it: a large Ukrainian-speaking workforce now resides in Poland, which deepened Ukrainian and Russian language coverage considerably. Operationally, established hubs continue to run normally. We staff on current conditions and will tell you directly if that assessment changes.',
      },
      {
        q: 'Can you cover UK hours from Poland?',
        a: 'Yes, with a one-hour offset — a Polish team covers the UK working day comfortably on a normal shift. For UK-only programs, though, South Africa is usually better value. Poland earns its cost when you need multiple European languages, not English alone.',
      },
    ],
  },
  {
    slug: 'vietnam',
    name: 'Vietnam',
    region: 'offshore',
    flagEmoji: '🇻🇳',
    heroImage: '/images/hd-agents-row.jpg',
    metaTitle: 'Vietnam Call Center Staffing | APAC Support & Back Office',
    metaDescription:
      'Vietnam call center staffing in Ho Chi Minh City, Hanoi and Da Nang. Cost-efficient APAC support, technical and back-office agents, on our payroll.',
    hero: {
      eyebrow: 'Vietnam · Offshore',
      headline: 'The cost-efficient APAC alternative — strongest where the work is written.',
      subhead:
        'Ho Chi Minh City and Hanoi offer the lowest loaded costs in mainstream APAC delivery, with real strength in chat, email, back-office and technical support.',
    },
    whyHere: [
      {
        title: 'Lowest cost in mainstream APAC delivery',
        body: 'Vietnam runs below the Philippines, Malaysia and India on loaded agent cost while sustaining reliable infrastructure and a rapidly professionalising services sector. For cost-driven APAC programs it is the strongest value available.',
      },
      {
        title: 'Written-channel and technical strength',
        body: 'Vietnamese written English is typically stronger than spoken, and the STEM education pipeline is deep. Chat, email, moderation, back-office and tier-2 technical support are where Vietnam consistently outperforms its price.',
      },
      {
        title: 'A young workforce entering a growing sector',
        body: 'A young median age and rapid growth in technology services mean an expanding pool of graduates entering CX and back-office roles, rather than a saturated market where advisors churn between employers for marginal raises.',
      },
      {
        title: 'ICT covers APAC and Australian hours',
        body: 'UTC+7 covers Southeast Asia, sits one hour behind Singapore and Manila, and reaches Australian business hours on a day shift — no night-shift premium for AEST programs.',
      },
    ],
    talentSnapshot: {
      talentPoolSize: '~25,000 contact-centre & BPO workers',
      avgEnglishProficiency: 'B1–B2 spoken · B2–C1 written',
      avgTenure: '~2.0 years (industry-weighted)',
      timeZones: ['ICT (UTC+7)'],
      languages: ['Vietnamese', 'English', 'Japanese (limited)', 'Korean (limited)'],
    },
    cities: [
      { name: 'Ho Chi Minh City', note: 'Largest pool, strongest English, senior bench' },
      { name: 'Hanoi', note: 'Technical support and back-office depth, STEM graduates' },
      { name: 'Da Nang', note: 'Lower cost, growing tech cluster, low attrition' },
      { name: 'Can Tho', note: 'Emerging capacity, most cost-efficient' },
    ],
    rolesAvailable: [
      'inbound-customer-service',
      'team-leads-supervisors',
      'qa-analysts',
      'workforce-management',
      'trainers',
    ],
    faqs: [
      {
        q: 'Should we use Vietnam for US consumer voice queues?',
        a: 'Generally no, and we will say so before you spend money finding out. Spoken English proficiency sits below the Philippines, and US consumer voice is the least forgiving channel there is. Vietnam earns its place on chat, email, back-office, moderation and technical support — where it is excellent value.',
      },
      {
        q: 'How does Vietnam compare with the Philippines?',
        a: 'The Philippines wins clearly on spoken English, CX maturity and depth of senior leadership. Vietnam wins on cost and on technical and written work. Many APAC programs we staff split the two: Philippines for voice, Vietnam for written channels and back-office.',
      },
      {
        q: 'Is the senior operations bench deep enough?',
        a: 'It is the market’s main limitation. Frontline and technical hiring is straightforward; experienced WFM leads, QA managers and CX operations directors are scarcer than in the Philippines or India. For larger programs we usually recommend planning that layer deliberately rather than assuming local supply.',
      },
      {
        q: 'Can Vietnam cover Australian business hours?',
        a: 'Yes, comfortably — UTC+7 is three to four hours behind AEST, so Australian hours fall inside a normal Vietnamese day shift. Combined with the cost base, that makes it a strong option for Australian back-office and chat support.',
      },
    ],
  },
];
