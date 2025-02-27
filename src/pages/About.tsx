import HeroSection from "@/components/about/HeroSection"
import MissionSection from "@/components/about/MissionSection"
import StatSection from "@/components/about/StatSection"
import VaccinationProcessSection from "@/components/about/VaccinationProcessSection"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const About = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <StatSection />
      <VaccinationProcessSection />

      <div className="fixed bottom-6 right-6 z-50">
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all">
          <Link to="/appointments">Book Appointment</Link>
        </Button>
      </div>
    </div>
  )
}

export default About

