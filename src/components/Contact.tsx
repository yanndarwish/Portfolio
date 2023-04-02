import { FC, SyntheticEvent, useRef, useState } from "react"
// motion
import { motion } from "framer-motion"
// animation
import { fadeIn } from "../animation"
// emailJs
import emailjs from "@emailjs/browser"
// icon
import { HiOutlineBadgeCheck } from "react-icons/hi"

const Contact: FC = () => {
	const [isSent, setIsSent] = useState(false)
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [nameTouched, setNameTouched] = useState(false)
	const [emailTouched, setEmailTouched] = useState(false)
	const [messageTouched, setMessageTouched] = useState(false)
	const form = useRef(null)

	const sendEmail = (e: SyntheticEvent) => {
		e.preventDefault()

		if (form.current && name && email && message) {
			emailjs.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_PUBLIC_KEY
			)
			setIsSent(true)
			// reset form
			setName("")
			setEmail("")
			setMessage("")
			setNameTouched(false)
			setEmailTouched(false)
			setMessageTouched(false)
			setTimeout(() => {
				setIsSent(false)
			}, 3000)
		}
	}

	return (
		<section id="contact" className="py-16 lg:section">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row">
					{/* text */}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="flex-1 flex justify-center items-center text-center lg:justify-start lg:text-left"
					>
						<div>
							<h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
								{isSent ? "Thank you!" : "Get in touch"}
							</h4>
							{isSent ? (
								<h2 className="text-[45px] lg:text-[90px] leading-none mb-12 text-center">
									I'll get back to you shortly!
								</h2>
							) : (
								<h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
									Let's work <br />
									together!
								</h2>
							)}
						</div>
					</motion.div>
					{/* form */}
					<motion.form
						id="form"
						ref={form}
						onSubmit={sendEmail}
						variants={fadeIn("left", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className={`flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 items-start mb-20 lg:mb-0 ${
							!isSent ? "pb-24" : ""
						}`}
					>
						{isSent ? (
							<div className="flex w-full h-full justify-center items-center">
								<button className="btn btn-lg">
									<HiOutlineBadgeCheck size={"36px"} />
								</button>
							</div>
						) : (
							<>
								<input
									name="name_from"
									type="text"
									minLength={3}
									placeholder="Your name"
									value={name}
									onTouchEnd={() => setNameTouched(true)}
									onChange={(e) => setName(e.target.value)}
									className={`bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all valid:border-green-500 ${
										nameTouched && "invalid:border-red-500"
									}
									}`}
									required
								/>
								<input
									name="email_from"
									type="email"
									placeholder="Your email"
									value={email}
									onTouchEnd={() => setEmailTouched(true)}
									onChange={(e) => setEmail(e.target.value)}
									className={`bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all valid:border-green-500 ${
										emailTouched && "invalid:border-red-500"
									}`}
									required
								/>
								<textarea
									name="message"
									placeholder="Your message"
									minLength={3}
									value={message}
									onTouchEnd={() => setMessageTouched(true)}
									onChange={(e) => setMessage(e.target.value)}
									className={`bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all valid:border-green-500 ${
										messageTouched && "invalid:border-red-500"
									}`}
									required
								></textarea>
								<button className="btn btn-lg">Send message</button>
							</>
						)}
					</motion.form>
				</div>
			</div>
		</section>
	)
}

export default Contact
