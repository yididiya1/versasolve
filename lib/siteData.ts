/**
 * Canonical, publishable facts for VersaSolve Consulting.
 * Source of truth: site-facts.md (2026-07-24). Both the visible sections and the
 * JSON-LD structured data read from here so the page and the schema never disagree.
 *
 * RULES ENCODED HERE (do not violate):
 * - No AggregateRating (no rating scale exists).
 * - No public telephone — contact is email + Google Meet booking link only.
 * - The 300% figure is Christopher Corson's attributed statement, never a first-party claim.
 *
 * EMAIL is the canonical public role address on the canonical domain.
 */

/** Standard call-to-action label used on every booking button across the site. */
export const CTA_LABEL = 'Book a free 15-min consultation'
/** Google Meet appointment booking link (Google Calendar appointment schedule). */
export const BOOKING_URL = 'https://calendar.app.google/TRNg4J99aZ2spjC88'
/** Canonical public email (role address on the canonical domain). */
export const EMAIL = 'hello@versasolveconsulting.com'

export const SITE = {
  name: 'VersaSolve Consulting',
  alternateName: 'VersaSolve',
  legalName: 'VersaSolve Consulting LLC',
  url: 'https://versasolveconsulting.com',
  descriptor:
    'New England web design, branding, and AI-search visibility for nonprofits, small businesses, and mission-driven organizations. Built to be found — and maintained so it stays that way.',
  elevatorPitch:
    'VersaSolve Consulting builds and maintains the digital presence that mission-driven organizations and growing businesses across New England need to be found — websites, brand identity, video, and AI-search visibility — backed by ongoing monthly care instead of a one-and-done handoff.',
  locality: 'Portland',
  region: 'ME',
  country: 'US',
  // Declared service areas (NOT landing pages — thin per-county pages read as doorway pages).
  // Named county anchors = where real client work exists (Cumberland: USM, coworkHERS ·
  // Essex: NAAM/Lynn). Broad state coverage supports remote + Upwork work. York/Androscoggin
  // stay unlisted until a case study there earns the mention.
  areaServed: [
    'New England',
    'Maine',
    'Massachusetts',
    'Cumberland County, Maine',
    'Essex County, Massachusetts',
  ],
  // sameAs: only public, login-free, canonical profile URLs. GBP is PENDING (omitted).
  sameAs: [
    'https://www.linkedin.com/company/versasolve-consulting/',
    'https://www.instagram.com/versasolveconsulting/',
    'https://www.facebook.com/versasolve.consulting/',
    'https://linktr.ee/Versasolveconsulting',
  ],
} as const

export const FOUNDER = {
  name: 'Abedom Gebreyesus',
  jobTitle: 'Founder & CEO',
  linkedin: 'https://www.linkedin.com/in/abedom-gebreyesus-697102175/',
  shortBio:
    'Abedom Gebreyesus is the Founder and Principal Consultant of VersaSolve Consulting, where he helps mission-driven organizations across New England build digital foundations that support long-term growth and visibility. He holds a Master of Arts in Leadership and Organizational Studies from the University of Southern Maine.',
} as const

export type ServiceKey = 'website' | 'brand' | 'video' | 'visibility' | 'versacare'

export const SERVICES: ReadonlyArray<{ key: ServiceKey; name: string; description: string }> = [
  {
    key: 'website',
    name: 'Website Design & Build',
    description:
      'Fast, mobile-first websites built on a modern stack — designed to convert visitors into real conversations, not just look good.',
  },
  {
    key: 'brand',
    name: 'Brand Identity',
    description:
      'Logo, color, type, and messaging so your organization looks consistent everywhere someone encounters you.',
  },
  {
    key: 'video',
    name: 'Promotional Video & Content',
    description: 'Short-form video and reels produced for the platforms your audience actually uses.',
  },
  {
    key: 'visibility',
    name: 'Visibility — SEO, AEO & GEO',
    description:
      "Optimization so you're found in Google search, surfaced in featured snippets and answer boxes, and cited by AI assistants like ChatGPT, Claude, and Perplexity.",
  },
  {
    key: 'versacare',
    name: 'VersaCare — Monthly Digital Care',
    description:
      'An ongoing monthly retainer that keeps your site secure, current, and improving, with reporting — instead of a site that quietly decays after launch.',
  },
]

export const TESTIMONIALS: ReadonlyArray<{
  quote: string
  author: string
  title: string
  org: string
}> = [
  {
    quote:
      'Since hiring VersaSolve for the last few years the impact has been significant. The amount of interest and understanding of my program has grown. Through the help of VersaSolve we have seen increased visibility in our student population. We have seen growth in the number of our participants involved in our program. Likewise, we have seen a significant jump in our digital footprint through website enhancements and digital marketing by over 300 percent. In addition, VersaSolve has served as a training mechanism for our students. Our students have become more knowledgeable in social media and marketing. Finally, VersaSolve has helped streamline our organizational responsibilities to make it better organized and structured in our day to day operations. It is without reservation that I would recommend VersaSolve.',
    author: 'Christopher Corson',
    title: 'Program Coordinator',
    org: 'Recovery Oriented Campus Center (USM ROCC)',
  },
  {
    quote:
      "VersaSolve Consulting LLC reviewed and offered adjustments and recommendations that updated my website and boosted my SEO. I'm seeing higher rankings, more traffic, and more business. Professional, effective, and easy to work with — highly recommend!",
    author: 'Heather Ashby',
    title: 'Founder & CEO',
    org: 'coworkHERS',
  },
  {
    quote:
      "I'm incredibly thankful for VersaSolve Consulting's quick response, fast turnaround, and exceptional quality of work. Their professionalism and efficiency made the entire process seamless, and I look forward to continuing our partnership.",
    author: 'Stephen Ochan',
    title: 'Executive Director',
    org: 'Kennedy Park FC',
  },
  {
    quote:
      'VersaSolve does a great job not only serving but educating their clients about marketing — social media, AEO, SEO — and everything in between. They are very helpful.',
    author: 'Bilien Woldeyonas',
    title: 'Executive Director',
    org: 'Everwell Allyship',
  },
]

/** AEO payload — answers lead with the direct answer so each can be extracted as a standalone snippet. */
export const FAQS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: 'Do you work with nonprofits?',
    a: "Yes. Nonprofits and mission-driven organizations are the core of VersaSolve Consulting's client base, including community organizations, social enterprises, and higher-education programs. From brand identity to websites and AI-search visibility, the focus is on building a digital presence that earns trust and keeps working long after launch.",
  },
  {
    q: 'What areas does VersaSolve Consulting serve?',
    a: 'VersaSolve Consulting serves clients across Maine and Massachusetts, anchored in Cumberland County, Maine (Portland and Greater Portland) and Essex County, Massachusetts (the Lynn and Greater Boston area), where it has ongoing client work. Projects are handled remotely through video calls, email, and shared documents, with in-person meetings available in both states.',
  },
  {
    q: 'What is AEO and GEO, and how are they different from SEO?',
    a: "SEO gets you ranked in Google's traditional search results. AEO, or Answer Engine Optimization, structures your content so it gets pulled into featured snippets and answer boxes. GEO, or Generative Engine Optimization, makes your business citable by AI assistants like ChatGPT, Claude, and Perplexity — increasingly where people start their research. VersaSolve builds all three into every site.",
  },
  {
    q: 'How do you get a business cited by ChatGPT, Claude, or Perplexity?',
    a: 'It takes two things working together: structured, machine-readable data on your own site — schema markup, clear entity information, and direct answers to real questions — plus corroborating signals off your site, like consistent business listings, reviews, and third-party mentions. AI assistants cite sources they can verify from more than one direction. Schema markup alone is not enough.',
  },
  {
    q: "What's included in VersaCare?",
    a: 'VersaCare is VersaSolve Consulting’s monthly digital care retainer. The Premium tier covers hosting oversight, security and software updates, backups, and a monthly allowance of content edits and fixes. The Elite tier adds active growth work — SEO, GEO, and AEO management, plus a monthly performance dashboard.',
  },
  {
    q: 'Why do I need a website if I already have social media?',
    a: "Social platforms rent you an audience and can change their rules or reach at any time; your own site is an asset you own permanently. It's also the only place search engines and AI assistants can verify who you are, what you do, and who you serve. Without it, you're invisible in exactly the searches where people are deciding who to contact.",
  },
  {
    q: 'Do you work remotely?',
    a: 'Yes. VersaSolve Consulting works remotely with clients throughout New England and beyond, handling everything through video calls, email, and shared documents. In-person meetings are available in the Portland, Maine and Greater Boston areas.',
  },
  {
    q: 'How is AI used in your work?',
    a: "AI is used to accelerate production — build scaffolding, content drafting, and research — while every strategic decision, design choice, and final deliverable is reviewed by a human. It's also central to what VersaSolve optimizes for: making sure clients are visible in AI-powered search, not just traditional search. Clients get the speed benefit without an AI-generated result.",
  },
  {
    q: 'What do you need from me to get started?',
    a: 'A signed service agreement, a deposit, and access to your domain and any existing accounts. From there VersaSolve needs your content — photos, bio, program or service information — plus timely feedback at defined review points. Everything else is handled.',
  },
  {
    q: 'How much does a website cost?',
    a: 'Website projects start at $900 for a Starter build, $1,600 for Growth, and $3,000 for a Full build. A Visibility Launch Bundle — a website built with SEO, AEO, and GEO from day one — starts at $1,950. Every project routes into an ongoing VersaCare care path so the site keeps working after launch.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Standard websites launch in 5 to 10 business days. For scoped 4 to 5 page builds, same-day launch is available. Timelines depend mainly on how quickly content and feedback come back from your side.',
  },
  {
    q: 'How much does VersaCare cost?',
    a: 'VersaCare monthly plans start at $450 for Premium — hosting oversight, security and software updates, backups, and a monthly allowance of content edits — and $900 for Elite, which adds active SEO, GEO, and AEO management plus a monthly performance dashboard.',
  },
  {
    q: 'How do I get in touch?',
    a: 'Book a free 15-minute consultation through the Google Meet scheduling link on versasolveconsulting.com, or email hello@versasolveconsulting.com. VersaSolve Consulting is based in Portland, Maine and works with clients across New England.',
  },
]
