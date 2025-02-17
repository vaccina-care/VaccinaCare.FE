import HeroSection from "@/components/about/HeroSection"
import MissionSection from "@/components/about/MissionSection"
import StatSection from "@/components/about/StatSection"
import VaccinationProcessSection from "@/components/about/VaccinationProcessSection"

const About = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <StatSection />
      <VaccinationProcessSection />
    </div>
  )
}

export default About

