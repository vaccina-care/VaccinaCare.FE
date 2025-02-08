import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

//import images
import vaccineImage from "@/assets/images/vaccine.png"
import { useNavigate } from "react-router-dom"


const vaccines = [
	{
		name: "Vắc xin Shingrix (Bỉ)",
		image: {vaccineImage}
	},
	{
		name: "Vắc xin Qdenga (Sản xuất tại Đức)",
		image: {vaccineImage}
	},
	{
		name: "Vắc xin Priorix (Bỉ)",
		image: {vaccineImage}
	},
	{
		name: "Vắc xin MMR II (Mỹ)",
		image: {vaccineImage}
	},
	{
		name: "Vắc xin Varilrix (Bỉ)",
		image: {vaccineImage}
	},
	{
		name: "Vắc xin Bexsero (Ý)",
		image: {vaccineImage}
	},
]

const VaccineSection = () => {

  const navigate = useNavigate()
  return (
    <section className="py-16 bg-[#EEF2FF]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e1b4b] font-yeseva">
            LIST OF VACCINES
          </h2>
          <Button
            variant="secondary"
            className="bg-blue-100 hover:bg-blue-200"
            onClick={() => navigate("/vaccines")}
          >
            Show more <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>


				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{vaccines.map((vaccine, index) => (
						<div
							key={index}
							className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
						>
							{/* Replace with your vaccine images */}
							<img
								src={vaccineImage}
								alt={vaccine.name}
								className="w-full h-48 object-cover object-fill mb-4"
							/>
							<h3 className="text-center text-[#1e1b4b] font-medium">
								{vaccine.name}
							</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default VaccineSection

