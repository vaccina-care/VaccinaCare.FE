
import { useState } from "react"
import { PackageSidebar } from "@/components/vaccineServices/Services"
import { PackageDetails } from "@/components/vaccineServices/ServiceDetails"

const mockVaccineInfo = [
  { disease: "Skibidi", vaccineName: "abc", manufacturer: "abc", batchNumber: "abc" },
  { disease: "Xe tai chat", vaccineName: "abc", manufacturer: "abc", batchNumber: "abc" },
  { disease: "Nich ga", vaccineName: "abc", manufacturer: "abc", batchNumber: "abc" },
  { disease: "Skibidi", vaccineName: "abc", manufacturer: "abc", batchNumber: "abc" },
  { disease: "Xe tai chat", vaccineName: "abc", manufacturer: "abc", batchNumber: "abc" },
  { disease: "Nich ga", vaccineName: "abc", manufacturer: "abc", batchNumber: "abc" },
  { disease: "Skibidi", vaccineName: "abc", manufacturer: "abc", batchNumber: "abc" },
  { disease: "Xe tai chat", vaccineName: "abc", manufacturer: "abc", batchNumber: "abc" },
  { disease: "Nich ga", vaccineName: "abc", manufacturer: "abc", batchNumber: "abc" },
]

export default function Services() {
  const [selectedPackage, setSelectedPackage] = useState("0-2")

  return (
    <div className="min-h-screen bg-[#FCFEFE] p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#1E1E1E] mb-8">GIỚI THIỆU CÁC GÓI TIÊM CHỦNG</h1>
        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-6">
          <PackageSidebar selectedPackage={selectedPackage} onSelectPackage={setSelectedPackage} />
          <div className="space-y-6">
            <PackageDetails packageId={selectedPackage} price="100000000" vaccineInfo={mockVaccineInfo} />
            <div className="flex justify-end">
              <button className="bg-[#526AE9] text-white px-8 py-3 rounded-lg hover:bg-[#526AE9]/90 transition-colors">
                ĐĂNG KÝ MUA GÓI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

