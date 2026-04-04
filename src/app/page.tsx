import Navbar from "@/components/sections/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Stats from "@/components/sections/Stats"
import Services from "@/components/sections/Services"
import SocialProof from "@/components/sections/SocialProof"
import Timeline from "@/components/sections/Timeline"
import Methodology from "@/components/sections/Methodology"
import WhyCore from "@/components/sections/WhyCore"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"
import LoadingScreen from "@/components/ui/LoadingScreen"
import ScrollProgress from "@/components/ui/ScrollProgress"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <Services />
        <SocialProof />
        <Timeline />
        <Methodology />
        <WhyCore />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
