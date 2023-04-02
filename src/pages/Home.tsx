// FC
import { FC } from "react"
// components
import About from "../components/About"
import Banner from "../components/Banner"
import Contact from "../components/Contact"
import Nav from "../components/Nav"
import Services from "../components/Services"
import Work from "../components/Work"

const Home: FC = () => {
	return (
		<div>
			<Nav />
			<Banner />
			<About />
			<Services />
			<Work />
			<Contact />
		</div>
	)
}

export default Home
