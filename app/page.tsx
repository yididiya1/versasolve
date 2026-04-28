import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Services from '@/components/Services'
import Approach from '@/components/Approach'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Services />
      <Approach />
      <About />
      <Contact />
    </main>
  )
}
