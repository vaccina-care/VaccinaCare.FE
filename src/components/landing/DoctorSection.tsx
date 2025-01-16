import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Linkedin, Facebook, Instagram } from 'lucide-react'

//Change the hover color of the arrow

const doctors = [
  {
    name: "Doctor's Name",
    specialty: "NEUROLOGY",
    image: "/path-to-doctor-1.jpg"
  },
  {
    name: "Doctor's Name",
    specialty: "NEUROLOGY",
    image: "/path-to-doctor-2.jpg"
  },
  {
    name: "Doctor's Name",
    specialty: "NEUROLOGY",
    image: "/path-to-doctor-3.jpg"
  },
  {
    name: "Doctor's Name",
    specialty: "NEUROLOGY",
    image: "/path-to-doctor-3.jpg"
  },
  {
    name: "Doctor's Name",
    specialty: "NEUROLOGY",
    image: "/path-to-doctor-3.jpg"
  },
  {
    name: "Doctor's Name",
    specialty: "NEUROLOGY",
    image: "/path-to-doctor-3.jpg"
  },
  
  // Add more doctors as needed
]

const DoctorSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <span className="text-blue-500 font-medium">
            TRUSTED CARE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] font-yeseva">
            Our Doctors
          </h2>
        </div>

        <div className="relative">
          {/* Carousel Navigation */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {doctors.map((doctor, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <Card className="overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-64 object-cover"
                    />
                    <CardContent className="text-center p-6 bg-blue-50">
                      <h3 className="font-medium text-lg mb-1">{doctor.name}</h3>
                      <p className="text-blue-600 mb-4">{doctor.specialty}</p>
                      <div className="flex justify-center gap-4 mb-4">
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Facebook className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Instagram className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button 
                        className="w-full bg-[#1e1b4b] hover:bg-[#1e1b4b]/90"
                      >
                        View Profile
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorSection

