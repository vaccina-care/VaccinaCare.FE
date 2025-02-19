import like from "@/assets/images/like.png";

interface VaccineInfo {
    description: string;
    vaccineName: string;
    type: string;
    requiredDoses: number;
}

interface PackageDetailsProps {
    packageId: string;
    price: string;
    vaccineInfo: VaccineInfo[];
}

export function PackageDetails({ packageId, price, vaccineInfo }: PackageDetailsProps) {
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
                    <h2 className="text-2xl font-semibold text-[#1E1E1E]">{packageId}</h2>
                    <div className="bg-[#526AE9] px-4 py-2 rounded">
                        <span className="font-semibold text-white">{price}đ</span>
                    </div>
                </div>

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
                            {(vaccineInfo && vaccineInfo.length > 0) ? vaccineInfo.map((info, index) => (
                                <tr key={index} className="border-b last:border-0">
                                    <td className="py-3 px-4">{info.description}</td>
                                    <td className="py-3 px-4">{info.vaccineName}</td>
                                    <td className="py-3 px-4">{info.type}</td>
                                    <td className="py-3 px-4">{info.requiredDoses}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={4} className="py-3 px-4 text-center">Không có thông tin vắc xin</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
