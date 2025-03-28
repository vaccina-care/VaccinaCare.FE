import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

//Import images 
const logoImage = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=home%2Fwelcome.jpg&version_id=null"

const WelcomeSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
          <span className="text-blue-500 font-medium">
            WELCOME TO VACCINACARE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] font-yeseva">
            A Great Place to Receive Child Care
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
            scelerisque tortor ornare. Convallis felis vitae tortor augue. Velit nascetur
            proin massa in. Consequat faucibus porttitor enim et.
          </p>
          <Button
            variant="link"
            className="text-blue-500 hover:text-blue-700"
          >
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="max-w-4xl mx-auto h-[300px] md:h-[200px] overflow-hidden rounded-lg">
          <img src={logoImage || "/placeholder.svg"} alt="Medical Team" className="w-full h-full object-fit" />
        </div>
      </div>
    </section>  
  )
}

export default WelcomeSection

