// react-router
import { createBrowserRouter } from "react-router-dom"
// components
import Root from "./Root"
import Home from "../pages/Home"
import ProjectDetails from "../pages/ProjectDetails"
import Projects from "../pages/Projects"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/projects",
				element: <Projects />,
			},
			{
				path: "/projects/:id",
				element: <ProjectDetails />,
			},
		],
	},
])
