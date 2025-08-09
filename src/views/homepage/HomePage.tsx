import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Services from '@/sections/Services'
import Portfolio from '@/sections/Portfolio'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'
import {
  navbarData,
  heroData,
  aboutData,
  servicesData,
  portfolioData,
  contactData,
  footerData
} from './data'

export default function HomePage() {
  return (
    <>
      <Navbar data={navbarData} />
      <Hero data={heroData} />
      <About data={aboutData} />
      <Services data={servicesData} />
      <Portfolio data={portfolioData} />
      <Contact data={contactData} />
      <Footer data={footerData} />
    </>
  )
}
