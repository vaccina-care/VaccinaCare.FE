interface ProcessStepProps {
    number: number
    title: string
    color: "blue" | "orange" | "green"
    items: Array<{
        title: string
        description: string
    }>
}

const colorClasses = {
    blue: {
        bg: "bg-blue-50",
        number: "bg-blue-500",
        title: "text-blue-700",
        icon: "bg-blue-100",
    },
    orange: {
        bg: "bg-orange-50",
        number: "bg-orange-500",
        title: "text-orange-700",
        icon: "bg-orange-100",
    },
    green: {
        bg: "bg-green-50",
        number: "bg-green-500",
        title: "text-green-700",
        icon: "bg-green-100",
    },
}

const ProcessStepSection = ({ number, title, color, items }: ProcessStepProps) => {
    const colors = colorClasses[color]

    return (
        <div className={`${colors.bg} rounded-lg p-6 space-y-4`}>
            <div
                className={`${colors.number} text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4`}
            >
                {number}
            </div>
            <h3 className={`text-xl font-semibold ${colors.title}`}>{title}</h3>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg ${colors.icon} flex items-center justify-center`}>
                            <img src="/placeholder.svg?height=24&width=24" alt="Icon" className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-medium">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProcessStepSection

