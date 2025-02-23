import { FadeInSection } from "@/components/FadeInSection"
const missionImage = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=about%2Fmission.jpg&version_id=null"
const AboutMission = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<FadeInSection>
						<div className="space-y-6">
							<h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b]">
								The VaccinaCare Story: <br /> Nurturing Health Since 2018
							</h2>
							<p className="text-gray-600">
								VaccinaCare was born from a vision to revolutionize child healthcare. Founded in 2018 by a team of
								passionate pediatricians and tech innovators, our journey began with a simple yet powerful idea: to make
								vaccination accessible, efficient, and stress-free for every family.
							</p>
							<p className="text-gray-600">
								What started as a small clinic in downtown has now grown into a nationwide network of care centers. Our
								commitment to leveraging cutting-edge technology and personalized care has helped us safeguard the
								health of over 100,000 children and counting.
							</p>
						</div>
					</FadeInSection>

					<FadeInSection delay={0.2}>
						<div className="rounded-lg overflow-hidden h-[400px]">
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

export default AboutMission

