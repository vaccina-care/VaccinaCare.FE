import type { Vaccine } from "@/api/vaccine"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Info, Syringe } from "lucide-react"
import like from "@/assets/images/aba.png"
import { useLocation, useNavigate, useParams } from "react-router-dom"

interface PackageDetailsProps {
	packageName: string
	description: string
	vaccineInfo: Vaccine[]
	price: number
}


export function PackageDetails({ packageName, description, vaccineInfo, price }: PackageDetailsProps) {
	window.scrollTo(0, 0)
	const { packageId } = useParams<{ packageId: string }>()
	const navigate = useNavigate()
	const location = useLocation()

	const handleBookAppointment = () => {
		navigate("/appointments", { state: { fromVaccinePackageDetail: true, vaccinepackageId: packageId } })
	}

	const handleBackToVaccineList = () => {
		if (!location.state?.fromVaccinePackageDetail) {
			navigate("/vaccine-list")
		}
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="container mx-auto py-8 px-4">
				{/* Back Button */}
				<Button variant="ghost" onClick={handleBackToVaccineList} className="mb-8 hover:bg-gray-100">
					<ArrowLeft className="mr-2 h-4 w-4" /> Back to Vaccine List
				</Button>

				{/* Top Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
					{/* Package Name & Description */}
					<div>
						<h1 className="text-3xl font-bold text-[#1e1b4b]">{packageName}</h1>
						<p className="text-gray-600 mt-4">{description}</p>
					</div>

					{/* Package Image */}
					<div className="relative h-[300px] rounded-lg overflow-hidden bg-white shadow-lg">
						<img src={like || "/placeholder.svg"} alt="Vaccine Package" className="w-full h-full object-contain" />
					</div>
				</div>

				{/* Bottom Section: Pricing & Vaccine List */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Vaccine List */}
					<Card className="lg:col-span-2">
						<CardContent className="p-6">
							<h2 className="text-2xl font-semibold text-[#1e1b4b] mb-4">Vaccine List</h2>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b bg-gray-100">
											<th className="text-left py-3 px-4" style={{ width: "52%" }}>
												Disease Prevention
											</th>
											<th className="text-left py-3 px-4" style={{ width: "18%" }}>
												Vaccine Name
											</th>
											<th className="text-left py-3 px-4" style={{ width: "18%" }}>
												Origin
											</th>
											<th className="text-left py-3 px-4" style={{ width: "12%" }}>
												Doses
											</th>
										</tr>
									</thead>
									<tbody>
										{vaccineInfo.length > 0 ? (
											vaccineInfo.map((info, index) => (
												<tr key={index} className="border-b last:border-0">
													<td className="py-3 px-4">{info.description}</td>
													<td className="py-3 px-4">{info.vaccineName}</td>
													<td className="py-3 px-4">{info.type}</td>
													<td className="py-3 px-4">{info.requiredDoses}</td>
												</tr>
											))
										) : (
											<tr>
												<td colSpan={4} className="py-3 px-4 text-center text-gray-500">
													No vaccine information available
												</td>
											</tr>
										)}
									</tbody>
								</table>
							</div>
						</CardContent>
					</Card>

					{/* Pricing & Booking Card */}
					<Card>
						<CardContent className="p-6">
							<div className="space-y-8">
								<div className="bg-blue-50 p-6 rounded-lg">
									<h3 className="text-lg font-semibold text-blue-900 mb-2">Vaccine Package Price</h3>
									<div className="flex items-baseline space-x-2">
										<span className="text-3xl font-bold text-blue-600">
											{new Intl.NumberFormat("vi-VN", {
												style: "currency",
												currency: "VND",
											}).format(price)}
										</span>
										<span className="text-sm text-blue-600">/package</span>
									</div>
									<p className="text-sm text-blue-600 mt-2">
										Total price for {vaccineInfo.length} vaccine, including all necessary injections.
									</p>
								</div>

								<div className="space-y-6">
									<div className="flex items-start gap-2 text-gray-600 bg-gray-50/80 p-4 rounded-lg">
										<Info className="h-4 w-4 mt-1" />
										<p className="text-sm">Detailed injection schedule will be advised when booking.</p>
									</div>

									<Button size="lg" className="w-full bg-[#1e1b4b] hover:bg-[#1e1b4b]/90"
										onClick={handleBookAppointment}>
										<Syringe className="mr-2 h-5 w-5" />
										Book Appointment
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

