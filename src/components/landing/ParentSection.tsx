"use client"

import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Linkedin, Facebook, Instagram, Quote } from "lucide-react"

// Image url
const parent1 = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=home%2Ffamily1.jpg&version_id=null"
const parent2 = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=home%2Ffamily2.jpg&version_id=null"
const parent3 = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=home%2Ffamily3.jpg&version_id=null"
const parent4 = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=home%2Ffamily4.jpg&version_id=null"
const parent5 = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=home%2Ffamily5.jpg&version_id=null"
const parent6 = "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=home%2Ffamily6.jpg&version_id=null"

const parents = [
	{
		name: "The Johnson Family",
		description: "VaccinaCare made scheduling my child's vaccines so easy!",
		image: parent1,
	},
	{
		name: "The Martinez Family",
		description: "I never miss an important vaccine reminder anymore.",
		image: parent2,
	},
	{
		name: "The Lee Family",
		description: "The flexible appointment options fit my busy schedule.",
		image: parent3,
	},
	{
		name: "The Patel Family",
		description: "A smooth and stress-free vaccination experience for my baby.",
		image: parent4,
	},
	{
		name: "The Smith Family",
		description: "Their support team answered all my vaccine concerns.",
		image: parent5,
	},
	{
		name: "The Nguyen Family",
		description: "Highly recommended for parents who care about immunization!",
		image: parent6,
	},
]

const ParentSection = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "start",
		loop: true,
	})

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	return (
		<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
			<div className="container mx-auto px-4">
				<div className="text-center space-y-4 mb-16">
					<span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
						TRUSTED PARENTS
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] font-yeseva">Parent Experiences</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Hear from families who have trusted VaccinaCare with their children's immunization journey
					</p>
				</div>

				<div className="relative px-4 md:px-12">
					{/* Carousel Navigation */}
					<Button
						variant="outline"
						size="icon"
						className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-200 border-none rounded-full w-12 h-12"
						onClick={scrollPrev}
					>
						<ChevronLeft className="h-6 w-6" />
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-200 border-none rounded-full w-12 h-12"
						onClick={scrollNext}
					>
						<ChevronRight className="h-6 w-6" />
					</Button>

					{/* Carousel */}
					<div className="overflow-hidden" ref={emblaRef}>
						<div className="flex -mx-4">
							{parents.map((parent, index) => (
								<div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
									<Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg h-[500px] flex flex-col">
										<div className="relative">
											<img
												src={parent.image || "/placeholder.svg"}
												alt={parent.name}
												className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
										</div>
										<CardContent className="relative p-6 bg-white flex flex-col flex-grow">
											<Quote className="absolute top-0 right-0 h-24 w-24 text-blue-50 -mt-8 -mr-8 rotate-12" />
											<div className="flex flex-col h-full">
												{/* Content section that can grow */}
												<div className="flex-grow">
													<h3 className="font-medium text-lg mb-2 group-hover:text-blue-600 transition-colors duration-200">
														{parent.name}
													</h3>
													<p className="text-gray-600 text-sm leading-relaxed line-clamp-3">"{parent.description}"</p>
												</div>

												{/* Footer section that stays at bottom */}
												<div className="mt-auto pt-6">
													<div className="flex justify-start gap-3 mb-4">
														<Button
															variant="ghost"
															size="icon"
															className="h-8 w-8 rounded-full hover:bg-blue-50 hover:text-blue-600"
														>
															<Linkedin className="h-4 w-4" />
														</Button>
														<Button
															variant="ghost"
															size="icon"
															className="h-8 w-8 rounded-full hover:bg-blue-50 hover:text-blue-600"
														>
															<Facebook className="h-4 w-4" />
														</Button>
														<Button
															variant="ghost"
															size="icon"
															className="h-8 w-8 rounded-full hover:bg-blue-50 hover:text-blue-600"
														>
															<Instagram className="h-4 w-4" />
														</Button>
													</div>
													<Button className="w-full bg-[#1e1b4b] hover:bg-[#1e1b4b]/90 text-white transition-all duration-200 group-hover:shadow-md">
														View Story
													</Button>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ParentSection

