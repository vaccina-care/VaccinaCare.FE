"use client"

type SidebarProps = {
  onSectionClick: (sectionId: string) => void
  activeSection: string
}

export function VaccineSidebar({ onSectionClick, activeSection }: SidebarProps) {
  const menuItems = [
    { id: "section1", title: "1. Thông tin vắc xin" },
    { id: "section2", title: "2. Đối tượng" },
    { id: "section3", title: "3. Phác đồ, lịch tiêm" },
    { id: "section4", title: "4. Phản ứng sau tiêm" },
    { id: "section5", title: "5. Tình trạng vắc xin" },
  ]

  return (
    <nav className="space-y-2">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionClick(item.id)}
          className={`w-full text-left p-3 rounded-lg transition-colors ${activeSection === item.id ? "bg-blue-500 text-white font-medium" : "hover:bg-gray-100 text-gray-700"
            }`}
        >
          {item.title}
        </button>
      ))}
    </nav>
  )
}

