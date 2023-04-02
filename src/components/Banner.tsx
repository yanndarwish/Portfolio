// FC
import { FC } from "react"
// images
import profile from "../assets/images/prof.png"
// icons
import { FaGithub, FaLinkedin } from "react-icons/fa"
// type animation
import { TypeAnimation } from "react-type-animation"
// motion
import { motion } from "framer-motion"
// animation
import { fadeIn } from "../animation"
// react scroll
import { Link } from "react-scroll"

const Banner: FC = () => {
	return (
		<section
			id="home"
			className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
		>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
					{/* text */}
					<div className="flex-1 text-center  font-secondary lg:text-left">
						<motion.h1
							variants={fadeIn("up", 0.3)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="text-[55px] font-bold leading-[0.8] lg:text-[80px]"
						>
							YANN <span>DARWISH</span>
						</motion.h1>
						<motion.div
							variants={fadeIn("up", 0.4)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
						>
							<span className="mr-4 text-white">I am a</span>
							<TypeAnimation
								sequence={["Developer", 2000, "Dev", 2000]}
								speed={50}
								className="text-accent"
								wrapper="span"
								repeat={Infinity}
							/>
						</motion.div>
						<motion.p
							variants={fadeIn("up", 0.5)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-8 max-w-lg mx-auto lg:mx-0"
						>
							I'm a French Front End Developer that loves to build cool and
							modern applications.
						</motion.p>
						<motion.div
							variants={fadeIn("up", 0.6)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
						>
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
						</motion.div>
						{/* socials */}
						<motion.div
							variants={fadeIn("up", 0.7)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
						>
							<a href="https://github.com/yanndarwish" target="_blank">
								<FaGithub />
							</a>
							<a
								href="https://www.linkedin.com/in/yanndarwish/"
								target="_blank"
							>
								<FaLinkedin />
							</a>
						</motion.div>
					</div>
					{/* image */}
					<motion.div
						variants={fadeIn("down", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[400px] btn"
					>
						<img src={profile} alt="Yann" />
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Banner
