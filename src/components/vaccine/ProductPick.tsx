import { ClipboardList } from "lucide-react"
import vaccineEmpty from "@/assets/images/empty.png";

export function Sidebar() {
    return (
        <div className="w-72 bg-white p-4 rounded-lg border sticky top-4 max-h-screen overflow-y-auto">
            <div className="flex items-center gap-2 mb-4">
                <ClipboardList className="h-5 w-5 text-primary" />
                <h2 className="text-primary font-medium">DANH SÁCH VẮC XIN CHỌN MUA</h2>
            </div>
            <div className="flex flex-col items-center justify-center py-8">
                <img src={vaccineEmpty} alt="Empty state" width={120} height={120} className="mb-4" />

                <p className="text-text-secondary text-sm text-center">DANH SÁCH TRỐNG</p>
            </div>
            <button className="w-full bg-gray-200 text-text-secondary py-2 rounded-md mt-4">ĐĂNG KÝ MŨI TIÊM</button>
        </div>
    )
}
