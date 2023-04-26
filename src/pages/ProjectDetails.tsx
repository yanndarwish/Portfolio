// FC
import { FC } from "react"
// react router
import { useParams } from "react-router-dom"
// projects data
import { projects } from "../assets/data/data"
// motion
import { motion } from "framer-motion"
// animation
import { fadeIn } from "../animation"
// icons
import { FaReact } from "react-icons/fa"
import { DiJavascript1 } from "react-icons/di"
import { AiFillApi } from "react-icons/ai"
import {
	SiMui,
	SiRedux,
	SiTypescript,
	SiTailwindcss,
	SiElectron,
	SiMongodb,
} from "react-icons/si"
import { BsArrowDown } from "react-icons/bs"

const ProjectDetails: FC = () => {
	const { id } = useParams()
	const project = id && projects.filter((item) => item.id === parseInt(id))[0]

	const variantLeft = fadeIn("left", 0.5)
	const variantRight = fadeIn("right", 0.5)

	return project ? (
		<div className="container mx-auto max-h-max">
			{/* header */}
			<div className="flex flex-col justify-center items-center lg:items-start h-[75vh]">
				<motion.h1
					variants={fadeIn("up", 0.3)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className="h2 leading-tight text-accent font-bold text-center lg:text-left"
				>
					{project.title}
				</motion.h1>
				<motion.h2
					variants={fadeIn("up", 0.4)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className="h3 text-center lg:text-left"
				>
					{project.subtitle}
				</motion.h2>
				{/* tech  */}
				<div className="flex gap-x-8 mb-16">
					{project.tech.map((tech, i) => {
						return (
							<motion.div
								key={i}
								variants={fadeIn("left", i / 10 + 0.7)}
								initial="hidden"
								whileInView={"show"}
								viewport={{ once: false, amount: 0.7 }}
								className="group relative cursor-pointer flex justify-center items-center h-16 w-16 rounded-full border border-white/50 hover:text-accent hover:border-accent hover:transition-all hover:duration-300"
							>
								{tech === "javascript" ? (
									<DiJavascript1 />
								) : tech === "react" ? (
									<FaReact />
								) : tech === "mui" ? (
									<SiMui />
								) : tech === "redux" ? (
									<SiRedux />
								) : tech === "typescript" ? (
									<SiTypescript />
								) : tech === "tailwind" ? (
									<SiTailwindcss />
								) : tech === "api" ? (
									<AiFillApi />
								) : tech === "electron" ? (
									<SiElectron />
								) : tech === "mongodb" ? (
									<SiMongodb />
								) : undefined}
								<div className="opacity-0 absolute top-20 group-hover:opacity-100 transition-opacity duration-300">
									{tech.toUpperCase()}
								</div>
							</motion.div>
						)
					})}
				</div>
				{project.link && (
					<motion.a
						variants={fadeIn("up", 1.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						href={project.link}
						target="_blank"
					>
						<button className="btn btn-sm">Check full project</button>
					</motion.a>
				)}
				<div className="absolute bottom-[20px] left-[50%] translate-x-[-50%] animate-pulse opacity-40">
					<motion.div
						variants={fadeIn("down", 1.8)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
					>
						<BsArrowDown size={56} />
					</motion.div>
				</div>
			</div>
			<section
				className={`mt-24 flex flex-col gap-y-24 lg:gap-y-48 ${
					!project.link && "mb-8"
				}`}
			>
				{/* project content */}
				{project.content.map((item, i) => (
					<article key={i}>
						<div
							className={`flex flex-col gap-y-10 lg:mb-0 ${
								i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
							} lg:items-center lg:gap-x-20 lg:gap-y-0`}
						>
							{/* text */}
							<motion.div
								variants={
									i === 0
										? variantRight
										: fadeIn(
												i % 2 === 0 ? "right" : "left",
												i % 2 === 0 ? 0.3 : 0.5
										  )
								}
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
								variants={
									i === 0
										? variantLeft
										: fadeIn(
												i % 2 === 0 ? "left" : "right",
												i % 2 === 0 ? 0.5 : 0.3
										  )
								}
								initial="hidden"
								whileInView={"show"}
								viewport={{ once: false, amount: 0.7 }}
								className="flex-1 flex flex-col gap-y-12 lg:mb-0"
							>
								{item.images.map((image, i) => (
									<div
										className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
										key={i}
									>
										<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
										{/* image */}
										<img
											src={image}
											alt={item.title}
											className="group-hover:scale-125 transition-all duration-500"
										/>
										{/* title */}
										<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
											<span className="text-gradient">{item.title}</span>
										</div>
									</div>
								))}
							</motion.div>
						</div>
					</article>
				))}
				{project.link && (
					<div className="flex flex-col justify-center items-center h-screen">
						<>
							<motion.h2
								variants={fadeIn("up", 0.3)}
								initial="hidden"
								whileInView={"show"}
								viewport={{ once: false, amount: 0.7 }}
								className="h2 lg:mb-16 text-center hidden lg:block"
							>
								Come and Checkout the full project!
							</motion.h2>
							<motion.a
								variants={fadeIn("up", 0.5)}
								initial="hidden"
								whileInView={"show"}
								viewport={{ once: false, amount: 0.7 }}
								href={project.link}
								target="_blank"
							>
								<button className="btn btn-sm">Check full project</button>
							</motion.a>
						</>
					</div>
				)}
			</section>
		</div>
	) : (
		<div className="h-[85vh] w-screen flex justify-center items-center">
			loading...
		</div>
	)
}

export default ProjectDetails
