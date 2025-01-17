import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

//Import images 
import heroImage from "@/assets/images/welcome.png"

const HeroSection = () => {
  return (
    <section className="relative bg-[#EEF2FF] overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-100/50 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-100/50 translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="text-blue-500 font-medium">
              CARING FOR CHILDREN LIFE
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#1e1b4b] font-yeseva leading-tight">
              Caring for Children Today,
              <br />
              Building a Healthier Tomorrow.
            </h1>
            <Button 
              asChild
              className="bg-blue-600 hover:bg-blue-700"
              size="lg"
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
          <div className="relative object-cover">
            {/* Replace with your hero image */}
            <img
              src={heroImage}
              alt="Doctor"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

