"use client"

import { CardFooter } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Syringe, Package, Search } from "lucide-react"
import type { Vaccine } from "@/api/vaccine"
import type { VaccinePackage } from "@/api/package"
import { VaccinePackageCard } from "@/components/packageVaccine/packageCard"
import { getAllTypes } from "@/api/getAllType"
import { useDebounce } from "@/hooks/use-debounce"

type FilterType = "all" | "single" | "package"

export default function VaccineList() {
  const [filterType, setFilterType] = useState<FilterType>("all")
  const [searchName, setSearchName] = useState("")
  const [searchDescription, setSearchDescription] = useState("")
  const [vaccines, setVaccines] = useState<Vaccine[]>([])
  const [packages, setPackages] = useState<VaccinePackage[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const pageSize = 12
  const navigate = useNavigate()

  // Debounce search inputs
  const debouncedSearchName = useDebounce(searchName, 300)
  const debouncedSearchDescription = useDebounce(searchDescription, 300)

  useEffect(() => {
    window.scrollTo(0, 0)
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await getAllTypes({
          searchName: debouncedSearchName,
          searchDescription: debouncedSearchDescription,
          pageNumber: currentPage,
          pageSize,
        })

        if (response.isSuccess) {
          const data = response.data.items[0] // Get first item from array

          // Filter based on type
          if (filterType === "package") {
            setPackages(data.vaccinePackages)
            setVaccines([])
          } else if (filterType === "single") {
            setVaccines(data.vaccines)
            setPackages([])
          } else {
            setVaccines(data.vaccines)
            setPackages(data.vaccinePackages)
          }

          setTotalPages(response.data.totalPages)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [currentPage, debouncedSearchName, debouncedSearchDescription, filterType])

  const handlePackageSelect = (packageId: string) => {
    navigate(`/vaccine-package/${packageId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container py-8 px-4 md:px-6">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-[#1e1b4b]">LIST OF VACCINES</h1>
            <div className="flex flex-col sm:flex-row gap-4 md:items-center">
              <Select value={filterType} onValueChange={(value: FilterType) => setFilterType(value)}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Display by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    <div className="flex items-center gap-2">
                      <span>All</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="single">
                    <div className="flex items-center gap-2">
                      <Syringe className="h-4 w-4" />
                      <span>Single Vaccines</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="package">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      <span>Vaccine Packages</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search by name..."
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="w-full sm:w-[200px] pl-9"
                  />
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search by description..."
                    value={searchDescription}
                    onChange={(e) => setSearchDescription(e.target.value)}
                    className="w-full sm:w-[200px] pl-9"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-t-lg" />
                  <div className="space-y-2 p-4 bg-white rounded-b-lg">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-10 bg-gray-200 rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filterType !== "package" &&
                vaccines.map((vaccine) => (
                  <Card
                    key={vaccine.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full"
                  >
                    <CardHeader className="p-0">
                      <img
                        src={vaccine.picUrl || "/placeholder.svg?height=200&width=300"}
                        alt={vaccine.vaccineName}
                        className="w-full h-48 object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-4 space-y-4 flex-grow">
                      <CardTitle className="text-lg font-semibold line-clamp-2">{vaccine.vaccineName}</CardTitle>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-500">Origin: {vaccine.type}</p>
                        <p className="text-sm text-gray-500 line-clamp-3">{vaccine.description}</p>
                        <p className="text-lg font-bold text-blue-600">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(vaccine.price)}
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 mt-auto">
                      <Button
                        className="w-full bg-[#1e1b4b] hover:bg-[#1e1b4b]/90"
                        onClick={() => navigate(`/vaccine/${vaccine.id}`)}
                      >
                        Choose
                      </Button>
                    </CardFooter>
                  </Card>
                ))}

              {(filterType === "package" || filterType === "all") &&
                packages.map((pkg) => <VaccinePackageCard key={pkg.id} package={pkg} onSelect={handlePackageSelect} />)}
            </div>
          )}

          {/* Pagination */}
          {filterType !== "package" && (
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm">
                Page {currentPage} / {totalPages}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage >= totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

