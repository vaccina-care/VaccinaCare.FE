import { ChevronRight } from "lucide-react";

import embe from "@/assets/images/skibidi/embe.png";
import nhairanh from "@/assets/images/skibidi/nhairanh.png";
import nhoccon from "@/assets/images/skibidi/nhoccon.png";

interface PackageSidebarProps {
  selectedPackage: string;
  onSelectPackage: (id: string) => void;
  vaccinePackages: { id: string; title: string }[];
}

export function PackageSidebar({ selectedPackage, onSelectPackage, vaccinePackages }: PackageSidebarProps) {
  const icons = [embe, nhairanh, nhoccon];

  // Danh sách title mặc định
  const defaultTitles = [
    "Gói trẻ em từ 0-2 tuổi",
    "Gói tiền học đường từ 3-9 tuổi",
    "Gói thanh thiếu niên từ 9-18 tuổi"
  ];

  return (
    <div className="space-y-4 w-full max-w-md">
      {vaccinePackages.map((pkg, index) => {
        const displayTitle = index < 3 ? defaultTitles[index] : pkg.title;

        return (
          <button
            key={pkg.id}
            onClick={() => onSelectPackage(pkg.id)}
            className={`relative flex items-center w-full rounded-lg overflow-hidden transition-all duration-300 ${
              selectedPackage === pkg.id ? "bg-[#526AE9]" : "bg-[#D6E4FF]"
            }`}
            style={{ height: "110px" }}
          >
            {/* Khu vực hình ảnh */}
            <div
              className="relative w-1/3 h-full bg-[#BFD2F8] flex justify-center items-center"
              style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
            >
              <img src={icons[index % icons.length]} alt={displayTitle} className="w-20 h-20 object-contain" />
            </div>

            {/* Khu vực nội dung */}
            <div className="flex-1 flex justify-between px-5 py-3">
              <span className={`text-lg font-semibold ${selectedPackage === pkg.id ? "text-white" : "text-[#1E1E1E]"}`}>
                {displayTitle}
              </span>

              <div className="flex items-center">
                <ChevronRight className={`${selectedPackage === pkg.id ? "text-white" : "text-[#1E1E1E]"}`} />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
