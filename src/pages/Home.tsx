export interface IHomeProps {}

const Home = (props: IHomeProps) => {
	return (
		<div>
			Home
			<a href="/projects">projects</a>
			<a href="/projects/1">details</a>
		</div>
	)
}

export default Home
