export type Region = {
  slug: string;
  name: string;
  globe: string;
  shore: string;
  blurb: string;
  markets: string[];
  languages: string;
  coverage: string;
  image: string;
};

export const REGIONS: Region[] = [
  {
    slug: 'north-america',
    name: 'North America',
    globe: '🌎',
    shore: 'Onshore & nearshore',
    blurb:
      'US and Canada onshore agents for regulated, licensed and brand-sensitive queues — plus nearshore Mexico for bilingual depth on US time zones.',
    markets: ['United States', 'Canada', 'Mexico'],
    languages: 'English (native) · Spanish',
    coverage: 'PT · MT · CT · ET',
    image: '/images/america.jpg',
  },
  {
    slug: 'south-america',
    name: 'South America',
    globe: '🌎',
    shore: 'Nearshore',
    blurb:
      'Bilingual-by-default agents on US Central/Eastern overlap, with cost-efficient depth for voice, chat and licensed-adjacent work.',
    markets: ['Colombia', 'Brazil', 'Argentina', 'Peru'],
    languages: 'English · Spanish · Portuguese',
    coverage: 'CT · ET overlap',
    image: '/images/cc-team-collab.jpg',
  },
  {
    slug: 'central-america',
    name: 'Central America',
    globe: '🌎',
    shore: 'Nearshore',
    blurb:
      'Time-zone-aligned bilingual talent close to your customers — strong for inbound CS, outbound sales and blended campaigns.',
    markets: ['Costa Rica', 'Guatemala', 'El Salvador', 'Panama'],
    languages: 'English · Spanish',
    coverage: 'CT · ET overlap',
    image: '/images/cc-diverse-team.jpg',
  },
  {
    slug: 'caribbean',
    name: 'Caribbean',
    globe: '🌎',
    shore: 'Nearshore',
    blurb:
      'Native and near-native English on US time zones, with a mature BPO heritage — strong for voice, sales and premium customer support.',
    markets: ['Jamaica', 'Dominican Republic', 'Trinidad & Tobago'],
    languages: 'English (native) · Spanish',
    coverage: 'ET overlap',
    image: '/images/cc-team-meeting.jpg',
  },
  {
    slug: 'europe',
    name: 'Europe',
    globe: '🌍',
    shore: 'Multilingual',
    blurb:
      'Multilingual coverage for pan-European programs — native and near-native speakers across the major EU languages on local business hours.',
    markets: ['United Kingdom', 'Ireland', 'Poland', 'Romania', 'Portugal'],
    languages: 'English · German · French · Spanish · more',
    coverage: 'GMT · CET',
    image: '/images/cc-office-wide.jpg',
  },
  {
    slug: 'africa',
    name: 'Africa',
    globe: '🌍',
    shore: 'Offshore',
    blurb:
      'Neutral, UK-preferred English with strong CX maturity and UK time-zone overlap — cost-competitive for premium-accent voice work.',
    markets: ['South Africa', 'Kenya', 'Egypt', 'Nigeria'],
    languages: 'English (native) · French · Arabic',
    coverage: 'UK overlap · US night-shift',
    image: '/images/cc-support-team.jpg',
  },
  {
    slug: 'asia',
    name: 'Asia',
    globe: '🌏',
    shore: 'Offshore',
    blurb:
      'The deepest pool of native-English CX talent and round-the-clock coverage — built for 24/7 support, scale ramps and back-office work.',
    markets: ['Philippines', 'India', 'Malaysia'],
    languages: 'English · Tagalog · Hindi · more',
    coverage: '24/7 coverage',
    image: '/images/hd-office-team.jpg',
  },
  {
    slug: 'australia',
    name: 'Australia',
    globe: '🌏',
    shore: 'Onshore APAC',
    blurb:
      'Native-English agents on APAC business hours for local and follow-the-sun programs serving Australian and New Zealand customers.',
    markets: ['Australia', 'New Zealand'],
    languages: 'English (native)',
    coverage: 'AEST · APAC',
    image: '/images/hd-agents-row.jpg',
  },
  {
    slug: 'middle-east',
    name: 'Middle East',
    globe: '🌍',
    shore: 'Multilingual',
    blurb:
      'Arabic and English coverage for regional CX and sales programs, with multilingual depth across the Gulf and Levant.',
    markets: ['United Arab Emirates', 'Egypt', 'Jordan'],
    languages: 'Arabic · English',
    coverage: 'GST · regional hours',
    image: '/images/office-phone.jpg',
  },
];

export function getRegion(slug: string): Region | undefined {
  return REGIONS.find((r) => r.slug === slug);
}
