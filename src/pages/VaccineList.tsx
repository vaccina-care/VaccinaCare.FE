"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Syringe } from "lucide-react"
import { getVaccineList, type Vaccine } from "@/api/vaccine"

export default function VaccineList() {
  const [vaccineFilter, setVaccineFilter] = useState<"all" | "single">("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [vaccines, setVaccines] = useState<Vaccine[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const pageSize = 12
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    const fetchVaccines = async () => {
      try {
        setIsLoading(true)
        const response = await getVaccineList({
          page: currentPage,
          pageSize,
          search: searchTerm,
          type: vaccineFilter === "all" ? undefined : "single",
        })

        if (response.isSuccess) {
          setVaccines(response.data.vaccines)
          setTotalPages(Math.ceil(response.data.totalCount / pageSize))
        } else {
          console.error("API returned unsuccessful response:", response)
        }
      } catch (error) {
        console.error("Error fetching vaccines:", error)
      } finally {
        setIsLoading(false)
      }
    }

    const debounceTimer = setTimeout(fetchVaccines, 300)
    return () => clearTimeout(debounceTimer)
  }, [currentPage, searchTerm, vaccineFilter])

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container py-8 px-4 md:px-6">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-[#1e1b4b]">Danh sách vắc xin</h1>
            <div className="flex flex-col sm:flex-row gap-4 md:items-center">
              <Select
                value={vaccineFilter}
                onValueChange={(value) => {
                  if (value === "all" || value === "single") {
                    setVaccineFilter(value)
                  }
                }}
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Hiển thị theo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    <div className="flex items-center gap-2">
                      <span>Tất cả</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="single">
                    <div className="flex items-center gap-2">
                      <Syringe className="h-4 w-4" />
                      <span>Vắc xin Lẻ</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="search"
                placeholder="Tìm kiếm vắc xin..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-[300px]"
              />
            </div>
          </div>

          {/* Vaccines Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <Card key={index} className="animate-pulse">
                  <CardHeader className="h-40 bg-gray-200 rounded-t-lg" />
                  <CardContent className="space-y-2 p-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                  </CardContent>
                  <CardFooter className="p-4">
                    <div className="h-10 bg-gray-200 rounded w-full" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {vaccines.map((vaccine) => (
                <Card key={vaccine.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <img
                      src={vaccine.picUrl || "/placeholder.svg?height=200&width=300"}
                      alt={vaccine.vaccineName}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4 space-y-2">
                    <CardTitle className="text-lg font-semibold line-clamp-2">{vaccine.vaccineName}</CardTitle>
                    <p className="text-sm text-gray-500">Nguồn gốc: {vaccine.type}</p>
                    <p className="text-sm text-gray-500 line-clamp-2">{vaccine.description}</p>
                    <p className="text-lg font-bold text-blue-600">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(vaccine.price)}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button
                      className="w-full bg-[#1e1b4b] hover:bg-[#1e1b4b]/90"
                      onClick={() => navigate(`/vaccine/${vaccine.id}`)}
                    >
                      CHỌN
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          {/* Pagination */}
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
              Trang {currentPage} / {totalPages}
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
        </div>
      </main>
    </div>
  )
}

