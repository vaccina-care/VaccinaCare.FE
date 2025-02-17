import { FadeInSection } from "@/components/FadeInSection"

const missionImage = "http://103.211.201.162:9001/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=about-us%2Fmission.jpg&version_id=null"

const MissionSection = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<FadeInSection>
						<div className="space-y-6">
							<h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b]">
								Our commitment to children's health is at the heart of everything we do
							</h2>
							<p className="text-gray-600">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua.
							</p>
							<p className="text-gray-600">
								Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</p>
						</div>
					</FadeInSection>

					<FadeInSection delay={0.2}>
						<div className="rounded-lg overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]">
							<img
								src={missionImage}
								alt="Our Mission"
								className="w-full h-full object-cover object-center"
							/>
						</div>
					</FadeInSection>
				</div>
			</div>
		</section>
	)
}

export default MissionSection

