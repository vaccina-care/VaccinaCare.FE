import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { FadeInSection } from "../FadeInSection"

const heroImage =
  "https://plus.unsplash.com/premium_photo-1681843129112-f7d11a2f17e3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Full-screen background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-100/30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-100/30 translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 py-16 relative h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-white">
            <FadeInSection delay={0.1}>
              <span className="text-blue-300 font-medium">CARING FOR CHILDREN LIFE</span>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white font-yeseva leading-tight">
                Caring for Children Today,
                <br />
                Building a Healthier Tomorrow.
              </h1>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <Button asChild className="bg-blue-600 hover:bg-blue-700" size="lg">
                <Link to="/vaccine-list">Our Services</Link>
              </Button>
            </FadeInSection>
          </div>
          <FadeInSection delay={0.4}>
            <div className="hidden md:block relative w-full h-full">
              <div className="absolute inset-0 bg-blue-100/30 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-blue-200/30 rounded-lg transform -rotate-3"></div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

