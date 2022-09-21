/** @format */

import type { NextPage } from "next"
import Head from "next/head"
import { ReactNode } from "react"
import MovieDetails from "../../components/movie/movie-details"
import AppLayout from "../../layouts/app"
import DetailsPageLayout from "../../layouts/details-page"
import { APP_NAME } from "../../utils/constants"
import { useAppContext } from "../../utils/state/appContext"
import { MOVIE } from "../../utils/types"

const MovieDetailsPage: NextPage = () => {
	const { selectedMovie } = useAppContext()

	const movie = (() => selectedMovie as MOVIE)()
	const noSelection = Object.entries(movie)?.length === 0

	const detailsLayoutProps = {
		movieDetails: ((): ReactNode => <MovieDetails />)()
	}

	const { movieDetails } = detailsLayoutProps

	return (
		<AppLayout className="">
			<Head>
				<title>
					<>
						{APP_NAME} |{" "}
						{`${
							!noSelection
								? movie?.Title + " - " + movie?.Year
								: "Search by title or IMDB id"
						}`}
					</>
				</title>
				<meta name="description" content="Movies search app" />
				<link rel="icon" href="/favicons/favicon.ico" />
			</Head>

			<main className="w-full h-full">
				<DetailsPageLayout movieDetails={movieDetails} />
			</main>
		</AppLayout>
	)
}

export default MovieDetailsPage
