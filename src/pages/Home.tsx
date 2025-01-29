import HeroSection from "@/components/landing/HeroSection"
import WelcomeSection from "@/components/landing/WelcomeSection"
import VaccineSection from "@/components/landing/VaccineSection"
import DoctorSection from "@/components/landing/DoctorSection"
import { FadeInSection } from "@/components/FadeInSection"

const Home = () => {
  return (
    <div>
       <FadeInSection delay={0}>
        <HeroSection />
      </FadeInSection>
      <FadeInSection delay={0.4}>
        <WelcomeSection />
      </FadeInSection>
      <FadeInSection delay={0.6}>
        <VaccineSection />
      </FadeInSection>
      <FadeInSection delay={0.8}>
        <DoctorSection />
      </FadeInSection>
    </div>
  )
}

export default Home

