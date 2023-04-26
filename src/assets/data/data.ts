// IMAGES
// amdinis
import adminisThumb from "../projects/dashboard/Thumbnail_Dashboard.png"
import adminisHome from "../projects/dashboard/Home_Dashboard.png"
import adminisHome2 from "../projects/dashboard/Home_Dashboard-2.png"
import adminisTheme from "../projects/dashboard/Theme_Dashboard.png"
import adminisSidebar from "../projects/dashboard/Sidebar_Dashboard.png"
import adminisTables from "../projects/dashboard/Tables_Dashboard.png"
import adminisTables2 from "../projects/dashboard/Tables_Dashboard-2.png"
import adminisBar from "../projects/dashboard/Charts_Dashboard.png"
import adminisBar2 from "../projects/dashboard/Charts_Dashboard-2.png"
import adminisLine from "../projects/dashboard/Charts_Dashboard-3.png"
import adminisLine2 from "../projects/dashboard/Charts_Dashboard-4.png"
import adminisPie from "../projects/dashboard/Charts_Dashboard-5.png"
import adminisPie2 from "../projects/dashboard/Charts_Dashboard-6.png"
import adminisMap from "../projects/dashboard/Charts_Dashboard-7.png"
import adminisMap2 from "../projects/dashboard/Charts_Dashboard-8.png"
// ecommerce
import ecommerceThumb from "../projects/ecommerce/Thumbnail_Ecommerce.png"
import ecommerceDetails from "../projects/ecommerce/Items_Details_Ecommerce.png"
import ecommerceResp from "../projects/ecommerce/Responsive_Ecommerce.png"
import ecommerceTheme from "../projects/ecommerce/Theme_Ecommerce.png"
import ecommerceMenu from "../projects/ecommerce/Menu_Light_Ecommerce.png"
import ecommerceMenu2 from "../projects/ecommerce/Menu_Dark_Ecommerce.png"
import ecommerceCart from "../projects/ecommerce/Cart_Light_Ecommerce.png"
import ecommerceCart2 from "../projects/ecommerce/Cart_Dark_Ecommerce.png"
import ecommerceCheckout from "../projects/ecommerce/Checkout_Light_Ecommerce.png"
import ecommerceCheckout2 from "../projects/ecommerce/Checkout_Dark_Ecommerce.png"
import ecommerceCheckoutErr from "../projects/ecommerce/Checkout_Error_Light_Ecommerce.png"
import ecommerceCheckoutErr2 from "../projects/ecommerce/Checkout_Error_Dark_Ecommerce.png"

// academy
import academyThumb from "../projects/academy/Thumbnail_Academy.png"
import academyResp from "../projects/academy/Responsive_Academy.png"
import academyComp from "../projects/academy/Complete_Academy.png"
import academyComp2 from "../projects/academy/Complete_Academy-2.png"
import academyComp3 from "../projects/academy/Complete_Academy-3.png"

// streammaze
import streammazeThumb from "../projects/streammaze/Thumbnail_StreamMaze.png"
import streammazeResp from "../projects/streammaze/Responsive_Large_StreamMaze.png"
import streammazeResp2 from "../projects/streammaze/Responsive_Small_StreamMaze.png"
import streammazeFilm from "../projects/streammaze/Film_Large_StreamMaze.png"
import streammazeFilm2 from "../projects/streammaze/Film_Small_StreamMaze.png"
import streammazeSeason from "../projects/streammaze/Season_Large_StreamMaze.png"
import streammazeSeason2 from "../projects/streammaze/Season_Small_StreamMaze.png"
import streammazeSearch from "../projects/streammaze/Search_StreamMaze.png"
import streammazeSearch2 from "../projects/streammaze/Search_Results_StreamMaze.png"
import streammazeTrailer from "../projects/streammaze/Trailer_StreamMaze.png"

// jobhunter
import jobhunterThumb from "../projects/jobhunter/Thumbnail_JobHunter.png"
import jobhunterSecure from "../projects/jobhunter/Secure_JobHunter.png"
import jobhunterVisual from "../projects/jobhunter/Visual_JobHunter.png"
import jobhunterPractical from "../projects/jobhunter/Practical_JobHunter.png"
import jobhunterSearch from "../projects/jobhunter/Search_JobHunter.png"
import jobhunterUseful from "../projects/jobhunter/Useful_JobHunter.png"

interface Content {
	title: string
	subtitle: string
	images: string[]
}

interface Service {
	name: string
	description: string
	link: string
}

interface Project {
	id: number
	title: string
	subtitle: string
	thumbnail: string
	link: string
	tech: string[]
	content: Content[]
}

export const projects: Project[] = [
	{
		id: 5,
		title: "JobHunter",
		subtitle: "The Job Application Tracker",
		thumbnail: jobhunterThumb,
		link: "",
		tech: ["electron", "react", "typescript", "tailwind", "mongodb"],
		content: [
			{
				title: "Secure",
				subtitle:
					"Using JWT token and hashed password to protect your account.",
				images: [jobhunterSecure],
			},
			{
				title: "Visual",
				subtitle:
					"Visualize your job hunting statistics with one look.",
				images: [jobhunterVisual],
			},
			{
				title: "Practical",
				subtitle:
					"Create, update and delete your job applications.",
				images: [jobhunterPractical],
			},
			{
				title: "Hide & seek",
				subtitle: "Search and filter through the list to find a particular item.",
				images: [jobhunterSearch],
			},
			{
				title: "Useful",
				subtitle: "Get reminded to revive your job applications, after a certain period.",
				images: [jobhunterUseful],
			},
		],
	},
	{
		id: 4,
		title: "StreamMaze",
		subtitle: "The Movie app",
		thumbnail: streammazeThumb,
		link: "https://stream-maze.vercel.app",
		tech: ["react", "typescript", "tailwind", "api"],
		content: [
			{
				title: "Complete",
				subtitle:
					"Get all the details about your favorite content thanks to the TMDB API.",
				images: [streammazeFilm, streammazeFilm2],
			},
			{
				title: "Responsive",
				subtitle:
					"A fully responsive design, bringing the best User Experience on every device.",
				images: [streammazeResp, streammazeResp2],
			},
			{
				title: "Explore",
				subtitle:
					"Find exactly what you're looking for, with the search functionnality.",
				images: [streammazeSearch, streammazeSearch2],
			},
			{
				title: "Detailed",
				subtitle: "Get detailed seasons overview.",
				images: [streammazeSeason, streammazeSeason2],
			},
			{
				title: "Functionnal",
				subtitle: "Watch the trailers directly from the app",
				images: [streammazeTrailer],
			},
		],
	},
	{
		id: 1,
		title: "Adminis",
		subtitle: "The complete Dashboard",
		thumbnail: adminisThumb,
		link: "https://dashboard-yanndarwish.vercel.app",
		tech: ["typescript", "react", "mui"],
		content: [
			{
				title: "Modern",
				subtitle:
					"A modern and sober design, for an agreable and efficient use.",
				images: [adminisHome, adminisHome2],
			},
			{
				title: "Responsive",
				subtitle:
					"A fully responsive design, bringing the best User Experience on every device.",
				images: [adminisThumb, adminisTheme],
			},
			{
				title: "Accessible",
				subtitle: "Custom navigation at your fingertips.",
				images: [adminisSidebar],
			},
			{
				title: "Tables",
				subtitle: "Store your staff's informations to get quick access.",
				images: [adminisTables, adminisTables2],
			},
			{
				title: "Bar Chart",
				subtitle: "Compare staff productivity to offer well deserved rewards.",
				images: [adminisBar, adminisBar2],
			},
			{
				title: "Line Chart",
				subtitle: "Compare sales by period and see when to push marketing.",
				images: [adminisLine, adminisLine2],
			},
			{
				title: "Pie Chart",
				subtitle: "Get an easy repartition overview to take better decisions.",
				images: [adminisPie, adminisPie2],
			},
			{
				title: "Map Chart",
				subtitle: "Visualize geographic data to get a broader understanding.",
				images: [adminisMap, adminisMap2],
			},
		],
	},
	{
		id: 2,
		title: "Ecommerce",
		subtitle: "The solid E-commerce",
		thumbnail: ecommerceThumb,
		link: "https://yanndarwish.github.io/Ecommerce/",
		tech: ["react", "redux", "typescript", "mui"],
		content: [
			{
				title: "Complete",
				subtitle: "A fully functionnal E-commerce website.",
				images: [ecommerceDetails],
			},
			{
				title: "Responsive",
				subtitle:
					"A responsive design, bringing the best User Experience on every device.",
				images: [ecommerceResp, ecommerceTheme],
			},
			{
				title: "Accessible",
				subtitle: "Custom navigation at your fingertips.",
				images: [ecommerceMenu, ecommerceMenu2],
			},
			{
				title: "Functionnal",
				subtitle: "Functionnalities such as a Cart and Checkout",
				images: [ecommerceCart, ecommerceCart2],
			},
			{
				title: "Modern",
				subtitle: "A sober yet design UI.",
				images: [ecommerceCheckout, ecommerceCheckout2],
			},
			{
				title: "Interactive",
				subtitle: "Give instant feedback on change.",
				images: [ecommerceCheckoutErr, ecommerceCheckoutErr2],
			},
		],
	},
	// {
	// 	id: 3,
	// 	title: "Academy",
	// 	subtitle: "The Landing page",
	// 	thumbnail: academyThumb,
	// 	link: "https://yanndarwish.github.io/Academy/",
	// 	tech: ["react", "typescript", "mui"],
	// 	content: [
	// 		{
	// 			title: "Modern",
	// 			subtitle:
	// 				"A light and modern design, for an agreable and efficient use.",
	// 			images: [academyThumb],
	// 		},
	// 		{
	// 			title: "Responsive",
	// 			subtitle:
	// 				"A fully responsive design, bringing the best User Experience on every device.",
	// 			images: [academyResp],
	// 		},
	// 		{
	// 			title: "Complete",
	// 			subtitle: "Diverse sections to bring out the best of you.",
	// 			images: [academyComp3, academyComp2, academyComp],
	// 		},
	// 	],
	// },
]

export const services: Service[] = [
	{
		name: "Development",
		description:
			"Create and bring new ideas to life is one of my super powers. If you can speak it, I'm sure it can be coded.",
		link: "/projects",
	},
	{
		name: "Testing",
		description:
			"Test and make sure that the product is solid and reliable is my main concern.",
		link: "#",
	},
	{
		name: "Documentation",
		description:
			"Writing and keeping a clear documentation is key in order to create a readable and maintainable app.",
		link: "#",
	},
]
