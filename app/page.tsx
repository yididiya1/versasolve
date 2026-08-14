import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhoWeServe from '@/components/WhoWeServe'
import Approach from '@/components/Approach'
import Portfolio from '@/components/Portfolio'
import Impact from '@/components/Impact'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import VersaVantage from '@/components/VersaVantage'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import ServiceCatalog from '@/components/ServiceCatalog'

export default function Home() {
  return (
    <main>
      {/* Org/Person/WebSite nodes come from app/layout.tsx so they exist on every page.
          The Service catalog is homepage-only; each /services/* page emits its own node. */}
      <ServiceCatalog />
      <Hero />
      <Services />
      <WhoWeServe />
      <Approach />
      <Portfolio />
      <Impact />
      <Testimonials />
      <About />
      <VersaVantage />
      <FAQ />
      <Contact />
    </main>
  )
}
