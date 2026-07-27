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
import StructuredData from '@/components/StructuredData'

export default function Home() {
  return (
    <main>
      <StructuredData />
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
