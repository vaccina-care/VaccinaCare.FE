import { useEffect, useState } from "react";
import { ProductCard } from "@/components/vaccine/ProductCard";
import { Sidebar } from "@/components/vaccine/ProductPick";
import { SearchBar } from "@/components/vaccine/SearchBar";
import { getVaccines } from "@/api/vaccine";

interface Vaccine {
  id: string;
  vaccineName: string;
  type: string;
  price: number;
}

export default function VaccineList() {
  const [selectedFilter, setSelectedFilter] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");
  const [vaccines, setVaccines] = useState<Vaccine[]>([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1); 
  const pageSize = 12;

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchVaccines = async () => {
      try {
        const data = await getVaccines(currentPage, pageSize);
        console.log("Dữ liệu API trả về:", data.data.vaccines);

        if (Array.isArray(data.data.vaccines)) {
          setVaccines(data.data.vaccines);
          
          const totalItems = data.data.totalCount ?? 1;
          setTotalPages(Math.ceil(totalItems / pageSize));
        } else {
          console.error("Dữ liệu trả về không đúng định dạng");
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách vắc xin:", error);
      }
    };

    fetchVaccines();
  }, [currentPage]);

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
              <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Tìm kiếm tên vắc xin..." />
            </div>
            <div className="grid grid-cols-3 gap-6">
              {/* Render danh sách vắc xin */}
              {vaccines
                .filter((vaccine) => vaccine.vaccineName.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((vaccine, index) => (
                  <div key={index}>
                    <ProductCard
                      title={vaccine.vaccineName}
                      source={`Nguồn gốc: ${vaccine.type}`}
                      price={vaccine.price}
                      onSelect={() => console.log("Selected:", vaccine.id)}
                    /></div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 border rounded-md mx-2 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
              >
                Trang trước
              </button>
              <span className="px-4 py-2">{totalPages > 1 ? `${currentPage} / ${totalPages}` : "1 / 1"}</span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage >= totalPages && vaccines.length < pageSize}
                className={`px-4 py-2 border rounded-md mx-2 ${currentPage >= totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
              >
                Trang sau
              </button>
            </div>
            
          </div>
          <Sidebar />
        </div>
      </main>
    </div>
  );
}
