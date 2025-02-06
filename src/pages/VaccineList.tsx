import { useEffect, useState } from "react"
import { ProductCard } from "@/components/vaccine/ProductCard"
import { Sidebar } from "@/components/vaccine/ProductPick"
import { SearchBar } from "@/components/vaccine/SearchBar"
  
const products = Array(9).fill({
  title: "Vắc xin Skibidi phòng bệnh yapping",
  source: "Nguồn gốc: virus A",
  price: 100000000,
})

export default function VaccineList() {
  const [selectedFilter, setSelectedFilter] = useState("Tất cả")
  const [searchTerm, setSearchTerm] = useState("")
  useEffect (() => {window.scrollTo(0,0)},[])

  return (
    <div className="min-h-screen bg-background">
      <main className="container py-8">
        <div className="flex gap-8">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-medium text-primary">THÔNG TIN SẢN PHẨM VẮC XIN</h1>
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="appearance-none bg-white border rounded-md py-1 px-3 pr-8 text-sm"
                >
                  <option>Tất cả</option>
                </select>
              </div>
              {/* Sử dụng SearchBar */}
              <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Tìm kiếm tên vắc xin..." />
            </div>
            <div className="grid grid-cols-3 gap-6">
              {products
                .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((product, i) => (
                  <ProductCard
                    key={i}
                    title={product.title}
                    source={product.source}
                    price={product.price}
                    onSelect={() => console.log("Selected:", i)}
                  />
                ))}
            </div>
          </div>
          <Sidebar />
        </div>
      </main>
    </div>
  )
}
