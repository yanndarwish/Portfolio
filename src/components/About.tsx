// FC
import { FC } from "react"
// countup
import CountUp from "react-countup"
// intersection observer hook
import { useInView } from "react-intersection-observer"
// motion
import { motion } from "framer-motion"
// animation
import { fadeIn } from "../animation"
// link
import { Link } from "react-scroll"

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	})
	return (
		<div id="about" className="section" ref={ref}>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="flex-1 hidden lg:flex bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-center"
					>
						{/* img */}
					</motion.div>

					{/* text */}
					<motion.div
						variants={fadeIn("left", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="flex-1"
					>
						<h2 className="h2 text-accent">About me</h2>
						<h3 className="h3 mb-16">I'm a Front-end Developer</h3>
						<p className="mb-16 text-center lg:text-left">
							I mainly use Typescript, React and Redux to develop modern and
							dynamic web applications. <br />
							Yet, stepping out of my comfort zone does not scare me, unknown
							languages and frameworks are just friends I haven't taken the time
							to meet yet.
						</p>
						{/* stats */}
						<div className="flex gap-x-6 lg:gap-x-10 mb-12 justify-center">
							<div>
								<div className="text-[36px] font-tertiary text-gradient mb-2 text-center">
									{inView ? <CountUp start={0} end={2} duration={5} /> : null}
								</div>
								<div className="font-primary text-sm tracking-[2px] text-center">
									Years of <br />
									Experience
								</div>
							</div>
							<div>
								<div className="text-[36px] font-tertiary text-gradient mb-2 text-center">
									{inView ? <CountUp start={0} end={20} duration={3} /> : null}+
								</div>
								<div className="font-primary text-sm tracking-[2px] text-center">
									Projects <br />
									Completed
								</div>
							</div>
						</div>
						<div className="flex gap-x-8 items-center justify-center lg:justify-start">
							<Link
								to="form"
								smooth={true}
								spy={true}
								className="cursor-pointer"
							>
								<button className="btn btn-lg">Contact me</button>
							</Link>
							<a href="/projects" className="text-gradient btn-link">
								My Portfolio
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default About
