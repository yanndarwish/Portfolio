// FC
import { FC } from "react"
// motion
import { motion } from "framer-motion"
// animation
import { fadeIn } from "../animation"
// projects data
import { projects } from "../assets/data/data"

const myProjects = projects.slice(0, 3)

const Work: FC = () => {
	return (
		<section className="section" id="work">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row gap-x-10 ">
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 lg:justify-between"
					>
						{/* text */}
						<div>
							<h2 className="h2 leading-tight text-accent">
								My Latest <br />
								Work
							</h2>
							<p className="max-x-sm mb-16">
								Here are some of my latest projects. <br />
								Feel free to check them out!
							</p>
							<a href="/projects">
								<button className="btn btn-sm">View all projects</button>
							</a>
						</div>
						{/* card */}
						<a href={`/projects/${myProjects[0].id}`}>
							<div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
								{/* overlay */}
								<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
								{/* img */}
								<img
									className="group-hover:scale-125 transition-all duration-500"
									src={myProjects[0].thumbnail}
									alt="project 1"
								/>
								{/* pretitle */}
								<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
									<span className="text-gradient">{myProjects[0].title}</span>
								</div>
								{/* title */}
								<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
									<span className="text-3xl text-white">
										{myProjects[0].subtitle}
									</span>
								</div>
							</div>
						</a>
					</motion.div>
					<motion.div
						variants={fadeIn("left", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="flex-1 flex flex-col gap-y-10"
					>
						{/* card */}
						<a href={`/projects/${myProjects[1].id}`}>
							<div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
								{/* overlay */}
								<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
								{/* img */}
								<img
									className="group-hover:scale-125 transition-all duration-500"
									src={myProjects[1].thumbnail}
									alt="project 1"
								/>
								{/* pretitle */}
								<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
									<span className="text-gradient">{myProjects[1].title}</span>
								</div>
								{/* title */}
								<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
									<span className="text-3xl text-white">
										{myProjects[1].subtitle}
									</span>
								</div>
							</div>
						</a>
						<a href={`/projects/${myProjects[2].id}`}>
							<div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
								{/* overlay */}
								<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
								{/* img */}
								<img
									className="group-hover:scale-125 transition-all duration-500"
									src={myProjects[2].thumbnail}
									alt="project 1"
								/>
								{/* pretitle */}
								<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
									<span className="text-gradient">{myProjects[2].title}</span>
								</div>
								{/* title */}
								<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
									<span className="text-3xl text-white">
										{myProjects[2].subtitle}
									</span>
								</div>
							</div>
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Work
