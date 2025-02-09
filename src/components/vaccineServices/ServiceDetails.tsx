import like from "@/assets/images/like.png";

interface VaccineInfo {
    disease: string
    vaccineName: string
    manufacturer: string
    batchNumber: string
}

interface PackageDetailsProps {
    packageId: string
    price: string
    vaccineInfo: VaccineInfo[]
}

export function PackageDetails({ packageId, price, vaccineInfo }: PackageDetailsProps) {
    const titles: Record<string, string> = {
        baby: "Gói trẻ em từ 0-2 tuổi",
        bigboy: "Gói tiền học đường từ 3-9 tuổi",
        teenager: "Gói thanh thiếu niên từ 9-18 tuổi",
        pregnant: "Gói phụ nữ trước khi mang thai",
        adult: "Gói người trưởng thành",
        chronic: "Gói người có bệnh mãn tính",
        premarital: "Gói tiền hôn nhân",
    };

    const packageTitle = titles[packageId] || "Gói không xác định"; // Xử lý trường hợp packageId không hợp lệ

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Header image */}
            <div className="relative h-48 bg-[#BFD2F8]/20">
                <img
                    src={like}
                    alt="Vaccine illustration"
                    className="h-full w-full object-cover object-fill"
                />
            </div>

            {/* Content */}
            <div className="bg-white p-6">
                <div className="flex items-center justify-between mb-6 bg-[#BFD2F8]/30 p-4 rounded-lg">
                    <h2 className="text-2xl font-semibold text-[#1E1E1E]">{packageTitle}</h2>
                    <div className="bg-[#526AE9] px-4 py-2 rounded">
                        <span className="font-semibold text-white">{price}đ</span>
                    </div>
                </div>
                {/* <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-3 px-4">Phòng bệnh</th>
                                <th className="text-left py-3 px-4">Tên vắc xin</th>
                                <th className="text-left py-3 px-4">Nước sản xuất</th>
                                <th className="text-left py-3 px-4">Số mũi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vaccineInfo.map((info, index) => (
                                <tr key={index} className="border-b last:border-0">
                                    <td className="py-3 px-4">{info.disease}</td>
                                    <td className="py-3 px-4">{info.vaccineName}</td>
                                    <td className="py-3 px-4">{info.manufacturer}</td>
                                    <td className="py-3 px-4">{info.batchNumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-3 px-4" style={{ width: '52%' }}>Phòng bệnh</th>
                                <th className="text-left py-3 px-4" style={{ width: '18%' }}>Tên vắc xin</th>
                                <th className="text-left py-3 px-4" style={{ width: '18%' }}>Nước sản xuất</th>
                                <th className="text-left py-3 px-4" style={{ width: '12%' }}>Số mũi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vaccineInfo.map((info, index) => (
                                <tr key={index} className="border-b last:border-0">
                                    <td className="py-3 px-4">{info.disease}</td>
                                    <td className="py-3 px-4">{info.vaccineName}</td>
                                    <td className="py-3 px-4">{info.manufacturer}</td>
                                    <td className="py-3 px-4">{info.batchNumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

