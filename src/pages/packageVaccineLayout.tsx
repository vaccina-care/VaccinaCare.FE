// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client"

// import { useState, useEffect } from "react"
// import { PackageSidebar } from "@/components/packageVaccine/packageSidebar"
// import { PackageDetails } from "@/components/packageVaccine/packageDetail"
// import { getVaccinePackages, getVaccineById } from "@/api/packageVaccine"
// import type { VaccinePackage, Vaccine } from "@/api/packageVaccine"
// import { Spinner } from "@/components/ui/spinner"

// export default function VaccinePackagesLayout() {
//     const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null)
//     const [vaccinePackages, setVaccinePackages] = useState<VaccinePackage[]>([])
//     const [selectedPackage, setSelectedPackage] = useState<VaccinePackage | null>(null)
//     const [vaccineDetails, setVaccineDetails] = useState<Vaccine[]>([])
//     const [isLoading, setIsLoading] = useState(true)
//     const [error, setError] = useState<string | null>(null)

//     useEffect(() => {
//         const fetchVaccinePackages = async () => {
//             try {
//                 const packages = await getVaccinePackages()
//                 setVaccinePackages(packages)
//                 if (packages.length > 0) {
//                     setSelectedPackageId(packages[0].id)
//                 }
//                 setIsLoading(false)
//             } catch (err) {
//                 setError("Error loading packages. Please try again later.")
//                 setIsLoading(false)
//             }
//         }

//         fetchVaccinePackages()
//     }, [])

//     useEffect(() => {
//         const fetchSelectedPackage = async () => {
//             if (!selectedPackageId) return

//             const selected = vaccinePackages.find((pkg) => pkg.id === selectedPackageId)
//             setSelectedPackage(selected || null)

//             if (selected) {
//                 try {
//                     const details = await Promise.all(selected.vaccineDetails.map((detail) => getVaccineById(detail.vaccineId)))
//                     setVaccineDetails(details)
//                 } catch (err) {
//                     setError("Error loading vaccine details. Please try again later.")
//                 }
//             }
//         }

//         fetchSelectedPackage()
//     }, [selectedPackageId, vaccinePackages])

//     if (isLoading)
//         return (
//             <div className="flex justify-center items-center h-screen">
//                 <Spinner />
//             </div>
//         )
//     if (error) return <div className="text-red-500 text-center">{error}</div>
//     if (!vaccinePackages || vaccinePackages.length === 0)
//         return <div className="text-center">No vaccine packages available.</div>

//     const packageIdMap: Record<string, string> = {
//         [vaccinePackages[0]?.id]: "Gói trẻ em từ 0-2 tuổi",
//         [vaccinePackages[1]?.id]: "Gói tiền học đường từ 3-9 tuổi",
//         [vaccinePackages[2]?.id]: "Gói thanh thiếu niên từ 9-18 tuổi",
//     }

//     return (
//         <div className="min-h-screen bg-[#FCFEFE] p-6">
//             <div className="max-w-7xl mx-auto">
//                 <h1 className="text-3xl font-bold text-center text-[#1E1E1E] mb-8">GIỚI THIỆU CÁC GÓI TIÊM CHỦNG</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-6">
//                     <PackageSidebar
//                         selectedPackageId={selectedPackageId || ""}
//                         onSelectPackage={setSelectedPackageId}
//                         vaccinePackages={vaccinePackages}
//                     />
//                     {selectedPackage && (
//                         <div className="space-y-6">
//                             <PackageDetails
//                                 packageName={packageIdMap[selectedPackage.id] || selectedPackage.packageName}
//                                 price={selectedPackage.price}
//                                 vaccineInfo={vaccineDetails}
//                             />
//                             <div className="flex justify-end">
//                                 <button className="bg-[#526AE9] text-white px-8 py-3 rounded-lg hover:bg-[#526AE9]/90 transition-colors">
//                                     ĐĂNG KÝ MUA GÓI
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }

