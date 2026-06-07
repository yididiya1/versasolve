import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhoWeServe from '@/components/WhoWeServe'
import Approach from '@/components/Approach'
import Portfolio from '@/components/Portfolio'
import Impact from '@/components/Impact'
import About from '@/components/About'
import VersaVantage from '@/components/VersaVantage'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhoWeServe />
      <Approach />
      <Portfolio />
      <Impact />
      <About />
      <VersaVantage />
      <Contact />
    </main>
  )
}
