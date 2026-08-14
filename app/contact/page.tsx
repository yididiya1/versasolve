import type { Metadata } from 'next'
import PageHero from '@/components/page/PageHero'
import Section from '@/components/page/Section'
import DataTable from '@/components/page/DataTable'
import Contact from '@/components/Contact'
import { SITE, EMAIL, BOOKING_URL, breadcrumbList } from '@/lib/siteData'

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfOPUV_q__sEe-CNxtFpxYUR5ENSsFuJ14vrlO_ocZ_YoYyYg/viewform'

const DESC =
  'Contact VersaSolve Consulting: book a free 15-minute consultation, email hello@versasolveconsulting.com, or submit a project request. Based in Portland, Maine, serving Maine and Massachusetts.'

export const metadata: Metadata = {
  title: 'Contact VersaSolve Consulting',
  description: DESC,
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    title: 'Contact VersaSolve Consulting · Portland, Maine',
    description: DESC,
    url: `${SITE.url}/contact`,
  },
}

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbList([
        { name: 'Home', path: '' },
        { name: 'Contact', path: '/contact' },
      ]),
    ],
  }

  const channels: React.ReactNode[][] = [
    [
      'Free 15-minute consultation',
      'Starting a project, or working out whether one is worth starting',
      <a
        key="book"
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-gold-dark underline decoration-gold-dark/30 underline-offset-2"
      >
        Book on Google Meet
      </a>,
    ],
    [
      'Email',
      'Questions, existing projects, and anything with attachments',
      <a
        key="email"
        href={`mailto:${EMAIL}`}
        className="font-semibold text-gold-dark underline decoration-gold-dark/30 underline-offset-2"
      >
        {EMAIL}
      </a>,
    ],
    [
      'Project request form',
      'Sending full project details in one pass, without scheduling a call first',
      <a
        key="form"
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-gold-dark underline decoration-gold-dark/30 underline-offset-2"
      >
        Open the request form
      </a>,
    ],
  ]

  return (
    <main className="bg-page text-deep">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="Contact · Accepting new projects"
        title={
          <>
            Contact <span className="text-gradient-warm">VersaSolve Consulting</span>
          </>
        }
        lead={
          <>
            You can reach VersaSolve Consulting three ways: book a free 15-minute consultation through the Google Meet
            scheduling link, email hello@versasolveconsulting.com, or submit the project request form. VersaSolve
            Consulting is based in Portland, Maine, serves clients across Maine and Massachusetts, and typically replies
            within 24 hours. There is no published phone number, so scheduling and email are the fastest routes.
          </>
        }
        secondary={{ label: 'Read the FAQ', href: '/faq' }}
      />

      {/* ── Channels ── */}
      <Section
        heading="What is the fastest way to reach VersaSolve Consulting?"
        tone="soft"
        intro={
          <p>
            Booking the consultation is the fastest route, because it skips the back-and-forth of finding a time. All
            three channels reach Abedom Gebreyesus directly. The practice is founder-led, so there is no
            intake queue or account manager in between.
          </p>
        }
      >
        <DataTable
          caption="Ways to contact VersaSolve"
          columns={['Channel', 'Best for', 'Where it goes']}
          rows={channels}
          minWidth={680}
        />
      </Section>

      {/* ── The call ── */}
      <Section heading="What happens on the free 15-minute consultation?" width="narrow">
        <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
          <p>
            The consultation is a 15-minute Google Meet call, free and with no commitment attached. The conversation
            covers where your organization currently shows up across Google and the AI assistants people now ask
            directly, what is missing from that picture, and the fastest path to closing the gap. You will leave the
            call with a clear read on your situation whether or not you go on to hire VersaSolve Consulting. The call is
            with Abedom Gebreyesus, the founder, rather than a salesperson. VersaSolve is founder-led, so the
            person scoping the work is the person who does it.
          </p>
          <p>
            Nothing needs to be prepared in advance, though a link to your current website helps if you have one. If a
            project follows the call, it begins with a signed service agreement, a deposit, and access to your domain
            and any existing accounts.
          </p>
        </div>
      </Section>

      {/* ── Getting started ── */}
      <Section heading="What do you need from me to get started?" tone="soft" width="narrow">
        <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
          <p>
            Three things start a project with VersaSolve: a signed service agreement, a deposit, and access to
            your domain and any existing accounts. Those three unblock everything technical, so they come first.
          </p>
          <p>
            After that, VersaSolve Consulting needs your content (photos, bio, and program or service information), plus
            timely feedback at defined review points during the build. Feedback speed is the single biggest factor in how
            fast a site launches, because the build pauses at each review until a decision comes back. Everything else,
            including setup, structure, schema markup, and launch, is handled in-house. Content is the
            most common thing that holds a project up, so gathering photos, staff bios, and program descriptions before
            the project starts is the most useful preparation a client can do.
          </p>
        </div>
      </Section>

      {/* ── Remote + location ── */}
      <Section heading="Does VersaSolve Consulting work remotely?" width="narrow">
        <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
          <p>
            Yes. VersaSolve Consulting works remotely with clients throughout New England and beyond, handling
            engagements through video calls, email, and shared documents from the first consultation through launch and
            into ongoing care. Remote is the default, not a fallback.
          </p>
          <p>
            In-person meetings are available in the Portland, Maine and Greater Boston areas. VersaSolve Consulting is
            based in Portland, Maine and operates as a service-area business, which means it serves clients at their
            location rather than from a storefront, and does not publish a street address or a public phone number.
            Email and the scheduling link are the two supported ways in. Clients across Maine and Massachusetts work this
            way routinely, including multi-year engagements such as the ongoing digital partnership with the University
            of Southern Maine&apos;s Recovery Oriented Campus Center in Portland.
          </p>
        </div>
      </Section>

      <Contact />
    </main>
  )
}
