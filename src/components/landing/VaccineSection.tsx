"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { getVaccineSection, type Vaccine } from "@/api/vaccine"

const VaccineSection = () => {
	const [vaccines, setVaccines] = useState<Vaccine[]>([])
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {
		const fetchVaccines = async () => {
			try {
				const response = await getVaccineSection({ pageSize: 6 })
				if (response.isSuccess) {
					setVaccines(response.data.vaccines)
				}
			} catch (error) {
				console.error("Failed to fetch vaccines:", error)
			} finally {
				setLoading(false)
			}
		}

		fetchVaccines()
	}, [])

	if (loading) {
		return (
			<section className="py-16 bg-[#EEF2FF]">
				<div className="container mx-auto px-4">
					<div className="flex justify-center items-center h-64">
						<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
					</div>
				</div>
			</section>
		)
	}

	return (
		<section className="py-16 bg-[#EEF2FF]">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-2xl md:text-3xl font-bold text-[#1e1b4b] font-yeseva">LIST OF VACCINES</h2>
					<Button variant="secondary" className="bg-blue-100 hover:bg-blue-200" onClick={() => navigate("/vaccine-list")}>
						Show more <ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{vaccines.map((vaccine, index) => (
						<div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
							<img
								src={vaccine.picUrl || "/placeholder.svg?height=192&width=256"}
								alt={vaccine.vaccineName}
								className="w-full h-48 object-contain mb-4"
							/>
							<div className="space-y-2">
								<h3 className="text-center text-[#1e1b4b] font-medium">{vaccine.vaccineName}</h3>
								<p className="text-center text-sm text-gray-600">{vaccine.description}</p>
								<p className="text-center text-blue-600 font-medium">
									{new Intl.NumberFormat("vi-VN", {
										style: "currency",
										currency: "VND",
									}).format(vaccine.price)}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default VaccineSection

