// FC
import { FC } from "react"
// icons
import { BsArrowUpRight } from "react-icons/bs"
// motion
import { motion } from "framer-motion"
// animation
import { fadeIn } from "../animation"
// image
import code from "../assets/images/code-typing.png"
// services data
import { services } from "../assets/data/data"

const Services: FC = () => {
	return (
		<section id="services" className="section">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row">
					{/* text & image*/}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="flex-1 mb-12 lg:mb-0"
					>
						<h2 className="h2 text-accent mb-6">What I Do</h2>
						<h3 className="h3 max-w-[455px] mb-16">
							I like to be involved in every step of the process.
						</h3>
						<a href="/projects">
							<button className="btn btn-sm">See my work</button>
						</a>
						<img src={code} alt="" className="w-[80%]" />
					</motion.div>
					{/* services */}
					<div className="flex-1">
						{/* services list */}
						<div>
							{services.map((service, i) => (
								<motion.div
									variants={fadeIn("left", 0.5 + (i + 3) * 0.1)}
									initial="hidden"
									whileInView={"show"}
									viewport={{ once: false, amount: 0.7 }}
									className="border-b border-white/20 mb-[38px] flex"
									key={i}
								>
									<div className="max-w-[476px]">
										<h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
											{service.name}
										</h4>
										<p className="font-secondary leading-tight mb-6">
											{service.description}
										</p>
									</div>
									<div className="flex flex-col flex-1 items-end">
										<a
											href={service.link}
											className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
										>
											<BsArrowUpRight />
										</a>
										<a href={service.link} className="text-gradient text-sm">
											Learn more
										</a>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services
