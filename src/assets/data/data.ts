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
		id: 1,
		title: "Adminis",
		subtitle: "The complete Dashboard",
		thumbnail: "/src/assets/projects/dashboard/Thumbnail_Dashboard.png",
		link: "https://yanndarwish.github.io/Dashboard/",
		tech: ["typescript", "react", "mui"],
		content: [
			{
				title: "Modern",
				subtitle:
					"A modern and sober design, for an agreable and efficient use.",
				images: [
					"/src/assets/projects/dashboard/Home_Dashboard.png",
					"/src/assets/projects/dashboard/Home_Dashboard-2.png",
				],
			},
			{
				title: "Responsive",
				subtitle:
					"A fully responsive design, bringing the best User Experience on every device.",
				images: [
					"/src/assets/projects/dashboard/Thumbnail_Dashboard.png",
					"/src/assets/projects/dashboard/Theme_Dashboard.png",
				],
			},
			{
				title: "Accessible",
				subtitle: "Custom navigation at your fingertips.",
				images: ["/src/assets/projects/dashboard/Sidebar_Dashboard.png"],
			},
			{
				title: "Tables",
				subtitle: "Store your staff's informations to get quick access.",
				images: [
					"/src/assets/projects/dashboard/Tables_Dashboard.png",
					"/src/assets/projects/dashboard/Tables_Dashboard-2.png",
				],
			},
			{
				title: "Bar Chart",
				subtitle: "Compare staff productivity to offer well deserved rewards.",
				images: [
					"/src/assets/projects/dashboard/Charts_Dashboard.png",
					"/src/assets/projects/dashboard/Charts_Dashboard-2.png",
				],
			},
			{
				title: "Line Chart",
				subtitle: "Compare sales by period and see when to push marketing.",
				images: [
					"/src/assets/projects/dashboard/Charts_Dashboard-3.png",
					"/src/assets/projects/dashboard/Charts_Dashboard-4.png",
				],
			},
			{
				title: "Pie Chart",
				subtitle: "Get an easy repartition overview to take better decisions.",
				images: [
					"/src/assets/projects/dashboard/Charts_Dashboard-5.png",
					"/src/assets/projects/dashboard/Charts_Dashboard-6.png",
				],
			},
			{
				title: "Map Chart",
				subtitle: "Visualize geographic data to get a broader understanding.",
				images: [
					"/src/assets/projects/dashboard/Charts_Dashboard-7.png",
					"/src/assets/projects/dashboard/Charts_Dashboard-8.png",
				],
			},
		],
	},
	{
		id: 2,
		title: "Ecommerce",
		subtitle: "The solid E-commerce",
		thumbnail: "/src/assets/projects/ecommerce/Thumbnail_Ecommerce.png",
		link: "https://yanndarwish.github.io/Ecommerce/",
		tech: ["react", "redux", "typescript", "mui"],
		content: [
			{
				title: "Complete",
				subtitle: "A fully functionnal E-commerce website.",
				images: ["/src/assets/projects/ecommerce/Items_Details_Ecommerce.png"],
			},
			{
				title: "Responsive",
				subtitle:
					"A responsive design, bringing the best User Experience on every device.",
				images: [
					"/src/assets/projects/ecommerce/Responsive_Ecommerce.png",
					"/src/assets/projects/ecommerce/Theme_Ecommerce.png",
				],
			},
			{
				title: "Accessible",
				subtitle: "Custom navigation at your fingertips.",
				images: [
					"/src/assets/projects/ecommerce/Menu_Light_Ecommerce.png",
					"/src/assets/projects/ecommerce/Menu_Dark_Ecommerce.png",
				],
			},
			{
				title: "Functionnal",
				subtitle: "Functionnalities such as a Cart and Checkout",
				images: [
					"/src/assets/projects/ecommerce/Cart_Light_Ecommerce.png",
					"/src/assets/projects/ecommerce/Cart_Dark_Ecommerce.png",
				],
			},
			{
				title: "Modern",
				subtitle: "A sober yet design UI.",
				images: [
					"/src/assets/projects/ecommerce/Checkout_Light_Ecommerce.png",
					"/src/assets/projects/ecommerce/Checkout_Dark_Ecommerce.png",
				],
			},
			{
				title: "Interactive",
				subtitle: "Give instant feedback on change.",
				images: [
					"/src/assets/projects/ecommerce/Checkout_Error_Light_Ecommerce.png",
					"/src/assets/projects/ecommerce/Checkout_Error_Dark_Ecommerce.png",
				],
			},
		],
	},
	{
		id: 3,
		title: "Academy",
		subtitle: "The Landing page",
		thumbnail: "/src/assets/projects/academy/Thumbnail_Academy.png",
		link: "https://yanndarwish.github.io/Academy/",
		tech: ["react", "typescript", "mui"],
		content: [
			{
				title: "Modern",
				subtitle:
					"A light and modern design, for an agreable and efficient use.",
				images: ["/src/assets/projects/academy/Thumbnail_Academy.png"],
			},
			{
				title: "Responsive",
				subtitle:
					"A fully responsive design, bringing the best User Experience on every device.",
				images: ["/src/assets/projects/academy/Responsive_Academy.png"],
			},
			{
				title: "Complete",
				subtitle: "Diverse sections to bring out the best of you.",
				images: [
					"/src/assets/projects/academy/Complete_Academy-3.png",
					"/src/assets/projects/academy/Complete_Academy-2.png",
					"/src/assets/projects/academy/Complete_Academy.png",
				],
			},
		],
	},
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
