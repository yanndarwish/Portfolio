// FC
import { FC } from "react"
// Outlet
import { Outlet } from "react-router-dom"
// components
import Header from "../components/Header"

const Root: FC = () => {
	return (
		<div className="bg-site bg-cover bg-no-repeat overflow-hidden app">
			<Header />
			<Outlet />
		</div>
	)
}

export default Root
