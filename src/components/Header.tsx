// FC
import { FC } from "react"
// react-scroll
import { Link } from "react-scroll"
// react router
import { useLocation } from "react-router-dom"

const Header: FC = () => {
	const location = useLocation()

	return (
		<header className="py-8">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					{/* logo */}
					<a href="/">
						<h3 className="text-gradient h3 mb-0">Yann</h3>
						<h3 className="h3">Darwish</h3>
					</a>
					{/* button */}
					{location.pathname === "/" ? (
						<Link to="work" smooth={true}>
							<button className="btn btn-sm">See my work</button>
						</Link>
					) : (
						<a href="/projects">
							<button className="btn btn-sm">My projects</button>
						</a>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
