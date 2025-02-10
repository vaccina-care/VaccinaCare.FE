import HeroSection from "@/components/landing/HeroSection"
import WelcomeSection from "@/components/landing/WelcomeSection"
import VaccineSection from "@/components/landing/VaccineSection"
import { FadeInSection } from "@/components/FadeInSection"
import ParentSection from "@/components/landing/ParentSection"

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
        <ParentSection />
      </FadeInSection>
    </div>
  )
}

export default Home

