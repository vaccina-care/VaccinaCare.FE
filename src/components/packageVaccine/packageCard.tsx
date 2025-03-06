import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package } from "lucide-react"
import type { VaccinePackage } from "@/api/package"

interface VaccinePackageCardProps {
    package: VaccinePackage
    onSelect: (id: string) => void
}

export function VaccinePackageCard({ package: vaccinePackage, onSelect }: VaccinePackageCardProps) {
    // Hardcode discount - sẽ đưa cho BE handle sau
    const discountPercentages: Record<string, number> = {
        "0-6": 5,
        "0-9": 6,
        "0-12": 7,
    }

    // Get discount percentage based on package name
    const getDiscount = () => {
        const matches = vaccinePackage.packageName.match(/\d+-\d+/)
        return matches ? discountPercentages[matches[0]] || 5 : 5
    }

    const discount = getDiscount()
    const discountAmount = (vaccinePackage.price * discount) / 100
    const finalPrice = vaccinePackage.price - discountAmount

    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-white flex flex-col h-full">
            <CardHeader className="p-0">
                <div className="h-48 bg-blue-100/50 flex items-center justify-center">
                    <Package className="h-24 w-24 text-blue-600/40" />
                </div>
            </CardHeader>
            <CardContent className="p-4 space-y-4 flex-grow">
                <h3 className="text-lg font-bold text-[#1e1b4b] line-clamp-2">{vaccinePackage.packageName}</h3>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <span className="text-gray-500 line-through text-sm">
                                {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(vaccinePackage.price)}
                            </span>
                            <div className="absolute -right-7 -top-3">
                                <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">-{discount}%</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-blue-600">
                            {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            }).format(finalPrice)}
                        </span>
                        <span className="text-xs text-gray-500">
                            (-{new Intl.NumberFormat("vi-VN").format(discountAmount)} VND)
                        </span>
                    </div>
                </div>
                <div className="space-y-2">
                    <h4 className="font-medium text-sm">Prevention:</h4>
                    <p className="text-sm text-gray-600 line-clamp-3">{vaccinePackage.description}</p>
                </div>
            </CardContent>
            <CardFooter className="p-4 mt-auto">
                <Button className="w-full bg-[#1e1b4b] hover:bg-[#1e1b4b]/90" onClick={() => onSelect(vaccinePackage.id)}>
                    Choose
                </Button>
            </CardFooter>
        </Card>
    )
}

