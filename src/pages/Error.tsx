import { useRouteError, isRouteErrorResponse } from "react-router-dom"

const Error = () => {
	const error: any = useRouteError()
	console.error(error)

	return (
		<div className="w-screen h-screen flex flex-col gap-3 items-center justify-center p-8">
			<h1 className="h2 font-bold">Oops!</h1>
			<p className="h3 text-center">Sorry, an unexpected error has occurred.</p>
			<p>
				{isRouteErrorResponse(error) ? (
					<i>{error.statusText || error.statusText}</i>
				) : (
					<i>{error.message || "Unknown Error"}</i>
				)}
			</p>
			<a href="/" className="my-16">
				<button className="btn btn-sm">Back Home</button>
			</a>
		</div>
	)
}

export default Error
