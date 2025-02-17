import { FadeInSection } from "@/components/FadeInSection"
import { Stethoscope, Syringe, Trash2, Users, Clock, LucideTestTube2, Ambulance, Archive } from "lucide-react"

const processSteps = [
    {
        title: "Before Vaccination",
        color: "blue" as const,
        items: [
            {
                icon: <Stethoscope className="w-5 h-5" />,
                title: "Screening",
                description: "Medical examination and consultation for vaccination candidates",
            },
            {
                icon: <LucideTestTube2 className="w-5 h-5" />,
                title: "Information and Q&A",
                description: "Provide information about the vaccine to be administered",
            },
        ],
    },
    {
        title: "During Vaccination",
        color: "orange" as const,
        items: [
            {
                icon: <Ambulance className="w-5 h-5" />,
                title: "Medical Staff",
                description: "Check vaccines, syringes, and new equipment before use",
            },
            {
                icon: <Users className="w-5 h-5" />,
                title: "Vaccination Subjects",
                description: "Allow vaccination subjects or parents/guardians to inspect the vaccine vial",
            },
            {
                icon: <Syringe className="w-5 h-5" />,
                title: "Administer Vaccine",
                description: "Inject correctly as prescribed, with the right dose and route",
            },
        ],
    },
    {
        title: "After Vaccination",
        color: "green" as const,
        items: [
            {
                icon: <Clock className="w-5 h-5" />,
                title: "Post-Vaccination Monitoring",
                description: "Record and monitor any reactions after vaccination",
            },
            {
                icon: <Archive className="w-5 h-5" />,
                title: "Storage",
                description: "Properly store unused vaccines and vaccination supplies as per regulations",
            },
            {
                icon: <Trash2 className="w-5 h-5" />,
                title: "Waste Management",
                description: "Dispose of medical waste from vaccination according to proper guidelines",
            },
        ],
    },
]

const VaccinationProcess = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6 md:px-8">
                <FadeInSection>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e1b4b] mb-0">
                        Vaccination Process in VaccinaCare
                    </h2>

                    {/* Timeline Image */}
                    <div className="mb-0 w-full">
                        <div className="aspect-[3/0.7] max-w-[1000px] mx-auto">
                            <img
                                src="https://nhathuoclongchau.com.vn/estore-images/process-vaccinePC.svg"
                                alt="Vaccination Process Timeline"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {processSteps.map((step, index) => (
                        <FadeInSection key={index} delay={0.1 * (index + 1)}>
                            <div className={`rounded-lg overflow-hidden`}>
                                {/* Header */}
                                <div
                                    className={`
                  p-4 text-white font-medium
                  ${step.color === "blue" ? "bg-blue-600" : ""}
                  ${step.color === "orange" ? "bg-orange-500" : ""}
                  ${step.color === "green" ? "bg-green-600" : ""}
                `}
                                >
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`
                        flex items-center justify-center w-6 h-6 rounded-full bg-white font-bold text-sm
                        ${step.color === "blue" ? "text-blue-600" : ""}
                        ${step.color === "orange" ? "text-orange-500" : ""}
                        ${step.color === "green" ? "text-green-600" : ""}
                      `}
                                        >
                                            {index + 1}
                                        </span>
                                        {step.title}
                                    </div>
                                </div>

                                {/* Content */}
                                <div
                                    className={`
                  p-4 space-y-4
                  ${step.color === "blue" ? "bg-blue-50" : ""}
                  ${step.color === "orange" ? "bg-orange-50" : ""}
                  ${step.color === "green" ? "bg-green-50" : ""}
                `}
                                >
                                    {step.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex items-start gap-3">
                                            <div
                                                className={`
                        p-2 rounded-lg
                        ${step.color === "blue" ? "bg-blue-100 text-blue-600" : ""}
                        ${step.color === "orange" ? "bg-orange-100 text-orange-500" : ""}
                        ${step.color === "green" ? "bg-green-100 text-green-600" : ""}
                      `}
                                            >
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900">{item.title}</h4>
                                                <p className="text-sm text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default VaccinationProcess

