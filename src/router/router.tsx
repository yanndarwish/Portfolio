// react-router
import { createBrowserRouter } from "react-router-dom"
// components
import Root from "./Root"
import Home from "../pages/Home"
import ProjectDetails from "../pages/ProjectDetails"
import Projects from "../pages/Projects"
import Error from "../pages/Error"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <Error />,
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
