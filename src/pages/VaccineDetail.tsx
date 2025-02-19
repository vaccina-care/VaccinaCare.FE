import like from "@/assets/images/like.png";

import { VaccineSidebar } from "@/components/vaccineDetails/vaccineSidebar"
import { VaccineDetail } from "@/components/vaccineDetails/vaccineDetail"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function VaccineDetailPage() {
    const [activeSection, setActiveSection] = useState("section1")

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setActiveSection(sectionId)
        }
    }

    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="container mx-auto p-4 px-6 max-w-5xl">
            <div className="w-full mb-8 overflow-hidden rounded-lg">
                <img
                    src={like}
                    alt="Vaccine illustration"
                    width={1400}
                    height={400}
                    className="w-full h-[300px] object-cover"
                />
            </div>

            <h1 className="text-3xl font-bold text-blue-700 mb-8">Vắc xin Skibidi (Đông Lào, Việt Cộng)</h1>

            <div className="grid md:grid-cols-[200px,1fr] gap-6">
                <VaccineSidebar onSectionClick={scrollToSection} activeSection={activeSection} />
                <VaccineDetail />
                <Button className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md shadow-lg">
                    ĐĂNG KÝ MŨI TIÊM
                </Button>
            </div>
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-6 p-3 rounded-full bg-orange-100 hover:bg-orange-200 transition-all duration-300 shadow-lg"
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="h-5 w-5 text-gray-600" />
                </button>
            )}
        </div>
    )
}

