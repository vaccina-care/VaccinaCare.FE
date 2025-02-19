import { FadeInSection } from "@/components/FadeInSection"
import SplitText from "@/components/ui/split-text"

const heroImage = "https://103.211.201.162:9001/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=about-us%2Fhero.jpg&version_id=null"

const HeroSection = () => {
	return (
		<section className="relative h-[60vh] min-h-[500px] bg-gray-900">
			{/* Background Image Placeholder */}
			<div className="absolute inset-0 bg-black/50">
				<img
					src={heroImage}
					alt="Hero Background"
					className="w-full h-full object-cover opacity-50"
				/>
			</div>

			<div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
				<FadeInSection>
					<h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
						<SplitText
							text="Passionate"
							className="text-blue-400"
							delay={50}
							animationFrom={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
							animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
							textAlign="left"
						/>
						<br/>
						<SplitText
							text="and caring"
							className="text-white"
							delay={50}
							animationFrom={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
							animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
							textAlign="left"
						/>
					</h1>
					<p className="text-xl text-white/80 max-w-2xl">
						We are proud to offer a wide range of vaccination services, ensuring the health and safety of children
						through professional care and modern facilities.
					</p>
				</FadeInSection>
			</div>
		</section>
	)
}

export default HeroSection

