// FC
import { FC } from "react"
// projects data
import { motion } from "framer-motion"
// motion
import { projects } from "../assets/data/data"
// animation
import { fadeIn } from "../animation"

const Projects: FC = () => {
	return (
		<div className="container mx-auto min-h-screen">
			{/* header */}
			<motion.h1
				variants={fadeIn("up", 0.3)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false, amount: 0.7 }}
				className="h2 leading-tight text-accent font-bold text-center lg:text-left"
			>
				My Latest Projects
			</motion.h1>
			<section className="my-24 flex flex-col lg:gap-y-48">
				{/* project content */}
				{projects.map((item, i) => (
					<article key={i}>
						<div
							className={`flex flex-col gap-y-10 mb-16 lg:mb-0 ${
								i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
							} lg:items-center lg:gap-x-20 lg:gap-y-0`}
						>
							{/* text */}
							<motion.div
								variants={fadeIn(
									i % 2 === 0 ? "right" : "left",
									i % 2 === 0 ? 0.3 : 0.5
								)}
								initial="hidden"
								whileInView={"show"}
								viewport={{ once: false, amount: 0.7 }}
								className="flex-1 flex flex-col"
							>
								<h2 className="h2 leading-tight text-accent">{item.title}</h2>
								<p className="max-x-sm">{item.subtitle}</p>
							</motion.div>
							{/* images */}
							<motion.div
								variants={fadeIn(
									i % 2 === 0 ? "left" : "right",
									i % 2 === 0 ? 0.5 : 0.3
								)}
								initial="hidden"
								whileInView={"show"}
								viewport={{ once: false, amount: 0.7 }}
								className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
							>
								<a href={`/projects/${item.id}`}>
									<div
										className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
										key={i}
									>
										<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
										{/* image */}
										<img
											src={item.thumbnail}
											alt={item.title}
											className="group-hover:scale-125 transition-all duration-500"
										/>
										{/* title */}
										<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
											<span className="text-gradient">{item.title}</span>
										</div>
									</div>
								</a>
							</motion.div>
						</div>
					</article>
				))}
			</section>
		</div>
	)
}

export default Projects
