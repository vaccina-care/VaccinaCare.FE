import { FadeInSection } from "@/components/FadeInSection"
import CountUp from "@/components/ui/count-up"

interface Stat {
    value: number
    label: string
    suffix?: string
}

const stats: Stat[] = [
    { value: 10000, label: "Children Vaccinated", suffix: "+" },
    { value: 50, label: "Expert Doctors", suffix: "+" },
    { value: 15, label: "Years Experience", suffix: "+" },
    { value: 98, label: "Success Rate", suffix: "%" },
]

const StatSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <FadeInSection>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                                    <CountUp to={stat.value} duration={2} separator="," />
                                    {stat.suffix}
                                </h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </FadeInSection>
            </div>
        </section>
    )
}

export default StatSection

