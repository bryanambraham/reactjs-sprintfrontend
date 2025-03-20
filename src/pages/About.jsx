import AboutHero from "../components/AboutHero"
import ShippingSolution from "../components/ShippingSolution"
import VisionMission from "../components/VisionMission"
import WhyChooseHero  from "../components/WhyChooseHero"

function About() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <VisionMission />
      <ShippingSolution />
      <WhyChooseHero />
    </div>
  )
}

export default About

