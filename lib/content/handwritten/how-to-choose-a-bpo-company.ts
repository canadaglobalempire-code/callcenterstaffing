import type { Post } from '../types';

export const post: Post = {
  slug: 'how-to-choose-a-bpo-company',
  title: 'How to Source and Choose a BPO Company',
  excerpt:
    'Sourcing BPO companies goes wrong when buyers start with a vendor list instead of a scope. This guide covers how to define the work, build a shortlist by region, the ten questions that separate providers, the compliance checks to run, and how to structure a pilot and contract.',
  metaTitle: 'How to Source and Choose a BPO Company',
  metaDescription:
    'Sourcing BPO companies step by step: define the scope, shortlist by region, ten questions to ask, compliance checks, pilot design and contract terms.',
  publishedAt: '2026-09-08',
  updatedAt: '2026-10-02',
  author: 'Call Center Staffing',
  category: 'Process',
  readingMinutes: 8,
  heroImage: '/images/internet-office-planning-meeting.jpg',
  primaryKeyword: 'sourcing bpo companies',
  relatedPostSlugs: [
    'bpo-vs-call-center-outsourcing',
    'top-15-bpo-companies-in-the-world',
    'best-call-center-outsourcing-companies',
  ],
  sections: [
    {
      paragraphs: [
        'Sourcing BPO companies usually starts in the wrong place. A buyer searches for providers, collects a long list of names, sends a request for proposal to a dozen of them and then tries to compare answers that were written to different assumptions. The proposals look alike because the brief was vague, and the decision ends up resting on price and presentation.',
        'A better order is to fix the scope first, then decide which regions can deliver it, then build a short list, then test. This guide walks through each step, including the questions that tend to separate a capable business process outsourcing partner from one that only sells well, and the contract terms worth settling before any work moves.',
      ],
    },
    {
      heading: 'Step 1: Define the scope before you contact anyone',
      level: 2,
      paragraphs: [
        'BPO covers a wide range of work: customer service, technical support, sales, collections, claims, billing, data entry and other back-office processes. A provider that is excellent at one can be ordinary at another. If you are unsure whether you need a broad BPO scope or call center outsourcing specifically, /blog/bpo-vs-call-center-outsourcing explains the difference and why it changes the contract.',
        'Write a short scope document before you look at a single vendor. It makes proposals comparable and answers the questions every serious provider will ask anyway:',
      ],
      bullets: [
        'Which processes or contact types move, and which stay in-house.',
        'Channels: voice, chat, email, social messaging or back-office queues.',
        'Volume by month and by hour of day, including seasonal peaks.',
        'Languages and the customer markets being served.',
        'Hours of coverage, including nights, weekends and holidays.',
        'The systems agents will use and who owns them.',
        'Regulatory obligations attached to the data, such as payment card, health or financial information.',
        'How you will measure success: service level, quality score, resolution rate, accuracy or turnaround time.',
      ],
    },
    {
      heading: 'Step 2: Shortlist by region before you shortlist by name',
      level: 2,
      paragraphs: [
        'Where the work is delivered shapes language fit, time-zone overlap, labor availability, cost and legal exposure more than any single provider choice. Decide the delivery model first, then look for the best providers within it.',
      ],
      bullets: [
        'Onshore: delivery in your own country. The strongest fit for regulated work, licensed roles and conversations where local knowledge matters.',
        'Nearshore: delivery from a nearby country with close time zones. For US buyers this usually means Mexico, Colombia, Central America or the Caribbean, with bilingual English and Spanish talent.',
        'Offshore: delivery from distant markets such as the Philippines, India, South Africa, Egypt or Kenya. Large labor pools and natural overnight coverage, with a higher bar for documentation and remote oversight.',
        'Blended: different work in different regions, for example daytime volume nearshore and overnight volume offshore.',
      ],
    },
    {
      paragraphs: [
        'Once you know the region, country rankings are a practical place to collect names. Our country lists cover the major delivery markets, including /blog/top-15-bpo-companies-in-the-world, /blog/top-15-bpo-companies-in-philippines, /blog/top-15-bpo-companies-in-mexico and /blog/top-15-bpo-companies-in-colombia. Use any list as a starting point for research, not a substitute for it. Aim for a long list of eight to ten providers and a short list of three or four that receive your full brief.',
      ],
    },
    {
      heading: 'Where to look when sourcing BPO companies',
      level: 2,
      paragraphs: [
        'Rankings and directories are only one channel. The most reliable names often come from people who have already bought the service.',
      ],
      bullets: [
        'Peers in your industry who outsource similar work, and the operations leaders you know who have managed a vendor relationship.',
        'Your software vendors. CRM, telephony and help desk platforms often know which providers run their tools well.',
        'Independent outsourcing advisors, if the scope is large enough to justify a fee.',
        'Provider websites, read critically. Look for specific descriptions of the work you need, not general claims of excellence.',
      ],
    },
    {
      heading: 'Step 3: Ten questions that separate providers',
      level: 2,
      paragraphs: [
        'Send the same questions to every shortlisted provider and ask for written answers. Vague replies are informative in themselves.',
      ],
      bullets: [
        'Which current clients run work closest to ours, and can we speak with one of them?',
        'Which site, and which floor or team within it, would handle our work?',
        'How do you recruit for a program like ours, and what does the candidate screen include?',
        'How long is initial training, who delivers it, and how is it tested before agents go live?',
        'How many agents does each supervisor manage, and how many clients does each supervisor carry?',
        'How do you calculate attrition, what has it been on comparable programs, and how fast are leavers replaced?',
        'How does workforce planning work, and who adjusts schedules when volume moves away from forecast?',
        'How is quality scored, and will you calibrate against our scorecard rather than your own?',
        'Who owns the process documentation, and what do we receive back if we end the contract?',
        'What reporting will we see each day and week, and can we access the raw data?',
      ],
    },
    {
      heading: 'Step 4: Run the compliance and security checks',
      level: 2,
      paragraphs: [
        'Ask for evidence rather than assurances, and make sure any audit report covers the specific site that would do your work. The exact checks depend on your data. PCI DSS applies where agents handle cardholder data. A provider handling protected health information for a US covered entity needs a business associate agreement under HIPAA. Personal data of EU residents brings GDPR into scope, and many delivery countries have their own data protection laws. Your counsel should confirm which rules apply to you.',
      ],
      bullets: [
        'Independent audit reports or certifications, and the date and scope of each.',
        'How agents reach your systems, and whether any customer data is stored on local machines.',
        'Floor controls such as clean-desk rules, device restrictions and screen-capture blocking.',
        'Which controls still apply when agents work from home.',
        'Business continuity: backup power, connectivity, alternate sites and how quickly work moves if a site goes down.',
        'Subcontracting rules, with written approval required before any other entity touches your work.',
        'Incident history and the notification process if something goes wrong.',
      ],
    },
    {
      heading: 'Step 5: Pilot before you commit',
      level: 2,
      paragraphs: [
        'A pilot is the only test that shows how a provider runs your work rather than how it describes its work. Keep it small enough to be safe and long enough to be real, with a defined scope, agreed metrics and a decision date set before it starts.',
        'Put your own people into the pilot. Have your quality lead score calls or transactions against your scorecard, join calibration sessions and listen for how supervisors coach. Agree in advance what happens if the pilot misses its targets, so ending it is a decision and not a dispute.',
      ],
    },
    {
      heading: 'Step 6: Settle the contract terms that matter later',
      level: 2,
      paragraphs: [
        'Most outsourcing disputes trace back to terms nobody negotiated at the start. Read these closely:',
      ],
      bullets: [
        'Billing unit: per hour, per productive hour, per transaction or per full-time equivalent. The right unit depends on how predictable your volume is.',
        'Minimum commitments, and what you owe when volume falls below them.',
        'Service levels, how they are measured and what remedies apply when they are missed.',
        'Staffing changes: the notice needed to add or reduce capacity.',
        'Ownership of process documentation, training materials, recordings and data.',
        'Exit terms: notice period, transition assistance and the return or destruction of your data.',
      ],
    },
    {
      heading: 'When a staffing partner fits better than a BPO',
      level: 2,
      paragraphs: [
        'Full outsourcing makes sense when you want a provider to own recruiting, supervision, facilities and results. If you already run your own operation and mainly need trained people, a staffing model may suit you better. Agents work inside your systems, to your scorecard and under your supervisors, while we keep them on our payroll and you pay only for hours worked. /services/bpo-recruitment explains how we recruit for BPO floors, and /blog/call-center-staff-augmentation-vs-outsourcing compares the two approaches. Staffing is our business, so weigh that preference accordingly. The sourcing steps above apply either way.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What is the first step in sourcing BPO companies?',
      a: 'Write the scope before you contact providers. Define the processes or contact types that will move, the channels, monthly and hourly volume, languages, hours of coverage, systems, regulatory obligations and the metrics you will judge success by. A clear scope makes proposals comparable and removes unsuitable providers early.',
    },
    {
      q: 'How many BPO companies should be on a shortlist?',
      a: 'A long list of eight to ten providers is usually enough for initial research, narrowed to three or four that receive the full brief and written questions. More than that tends to produce proposals nobody has time to evaluate properly.',
    },
    {
      q: 'Should I choose the country or the provider first?',
      a: 'Choose the delivery model first. Onshore, nearshore and offshore regions differ in language fit, time-zone overlap, labor supply, cost and legal exposure, and those differences usually matter more than the gap between two good providers in the same market.',
    },
    {
      q: 'Which contract terms cause the most problems with BPO providers?',
      a: 'The billing unit, minimum commitments, how service levels are measured and remedied, notice periods for changing capacity, ownership of documentation and data, and exit terms. Settle each in writing before any work moves.',
    },
  ],
};
