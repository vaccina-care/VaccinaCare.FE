import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { VaccinePackage } from "@/api/packageVaccine"

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
        <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="p-4 border-b">
                <h3 className="text-lg font-bold text-[#1e1b4b] line-clamp-2">{vaccinePackage.packageName}</h3>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
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
                    <span className="text-xs text-gray-500">(-{new Intl.NumberFormat("vi-VN").format(discountAmount)} VND)</span>
                </div>
                <div className="space-y-2">
                    <h4 className="font-medium text-sm">Phòng bệnh:</h4>
                    <p className="text-sm text-gray-600 line-clamp-3">{vaccinePackage.description}</p>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-[#1e1b4b] hover:bg-[#1e1b4b]/90" onClick={() => onSelect(vaccinePackage.id)}>
                    CHỌN
                </Button>
            </CardFooter>
        </Card>
    )
}

