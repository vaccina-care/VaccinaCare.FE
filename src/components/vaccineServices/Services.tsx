import { ChevronRight } from "lucide-react";

import embe from "@/assets/images/skibidi/embe.png";
import loveshit from "@/assets/images/skibidi/loveshit.png";
import nguoilon from "@/assets/images/skibidi/nguoilon.png";
import cobau from "@/assets/images/skibidi/cobau.png";
import nhairanh from "@/assets/images/skibidi/nhairanh.png";
import nhoccon from "@/assets/images/skibidi/nhoccon.png";
import onggia from "@/assets/images/skibidi/onggia.png";

interface PackageOption {
  id: string;
  icon: string;
  title: string;
}

const packageOptions: PackageOption[] = [
  { id: "baby", icon: embe, title: "Gói trẻ em từ 0-2 tuổi" },
  { id: "bigboy", icon: nhairanh, title: "Gói tiền học đường từ 3-9 tuổi" },
  { id: "teenager", icon: nhoccon, title: "Gói thanh thiếu niên từ 9-18 tuổi" },
  { id: "pregnant", icon: cobau, title: "Gói phụ nữ trước khi mang thai" },
  { id: "adult", icon: nguoilon, title: "Gói người trưởng thành" },
  { id: "chronic", icon: onggia, title: "Gói người có bệnh mãn tính" },
  { id: "premarital", icon: loveshit, title: "Gói tiền hôn nhân" },
];

interface PackageSidebarProps {
  selectedPackage: string;
  onSelectPackage: (id: string) => void;
}

export function PackageSidebar({ selectedPackage, onSelectPackage }: PackageSidebarProps) {
  return (
    <div className="space-y-4 w-full max-w-md">
      {packageOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelectPackage(option.id)}
          className={`relative flex items-center w-full rounded-lg overflow-hidden transition-all duration-300 ${
            selectedPackage === option.id ? "bg-[#526AE9]" : "bg-[#D6E4FF]"
          }`}
          style={{
            height: "110px", // Giảm chiều cao của thẻ div một chút
          }}
        >
          {/* Khu vực hình ảnh */}
          <div
            className="relative w-1/3 h-full bg-[#BFD2F8] flex justify-center items-center"
            style={{
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
            }}
          >
            <img src={option.icon} alt={option.title} className="w-20 h-20 object-contain" />
          </div>

          {/* Khu vực nội dung */}
          <div className="flex-1 flex justify-between px-5 py-3">
            <span
              className={`text-lg font-semibold ${
                selectedPackage === option.id ? "text-white" : "text-[#1E1E1E]"
              }`}
            >
              {option.title}
            </span>

            {/* Mũi tên */}
            <div className="flex items-center">
              <ChevronRight
                className={`${
                  selectedPackage === option.id ? "text-white" : "text-[#1E1E1E]"
                }`}
              />
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
