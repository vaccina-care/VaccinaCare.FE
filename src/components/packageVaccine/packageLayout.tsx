import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getVaccinePackageById, VaccinePackage } from "@/api/packageVaccine"
import { PackageDetails } from "./packageDetail"
import { getVaccineById, Vaccine } from "@/api/vaccine"

const PackageLayout = () => {
	const { packageId } = useParams<{ packageId: string }>()
	const [packageData, setPackageData] = useState<VaccinePackage | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	const [vaccineInfo, setVaccineInfo] = useState<Vaccine[]>([])

	useEffect(() => {
		const fetchPackageDetails = async () => {
			if (!packageId) return

			try {
				setLoading(true)
				const packageDetail = await getVaccinePackageById(packageId)
				setPackageData(packageDetail)

				// Lấy chi tiết của từng vaccine trong package
				const vaccines = await Promise.all(
					packageDetail.vaccineDetails.map((detail) => getVaccineById(detail.vaccineId))
				)
				setVaccineInfo(vaccines)
			} catch (err) {
				setError("Không thể lấy dữ liệu gói vaccine.")
			} finally {
				setLoading(false)
			}
		}

		fetchPackageDetails()
	}, [packageId])

	if (loading) return <p>Đang tải...</p>
	if (error) return <p className="text-red-500">{error}</p>
	if (!packageData) return <p>Không có dữ liệu.</p>

	return (
		<div className="max-w-4xl mx-auto p-6">
			<PackageDetails
				packageName={packageData.packageName}
				price={packageData.price}
				vaccineInfo={vaccineInfo}
			/>
		</div>
	)
}

export default PackageLayout
