/**
 * Search results
 *
 * @format
 */

import { useEffect, useState } from "react"
import { useAppContext } from "../../../utils/state/appContext"
import { MOVIE_LIST_OR_EMPTY } from "../../../utils/types"
import MovieCard from "../movie-card"

const EMPTY_MOVIE_LIST: MOVIE_LIST_OR_EMPTY = []
const SearchResults = () => {
	const { movies, searchString } = useAppContext()
	const [episodes, setEpisodes] = useState(EMPTY_MOVIE_LIST)
	const [tvMovies, setTvMovies] = useState(EMPTY_MOVIE_LIST)
	const [series, setSeries] = useState(EMPTY_MOVIE_LIST)

	// console.log("movies: ", movies)

	useEffect(() => {
		const _movies: MOVIE_LIST_OR_EMPTY = (() => movies as MOVIE_LIST_OR_EMPTY)()

		if (_movies.length > 0) {
			setEpisodes(_movies.filter((movie) => movie.Type === "episode"))
			setTvMovies(_movies.filter((movie) => movie.Type === "movie"))
			setSeries(_movies.filter((movie) => movie.Type === "series"))
		} else {
			setEpisodes(EMPTY_MOVIE_LIST)
			setTvMovies(EMPTY_MOVIE_LIST)
			setSeries(EMPTY_MOVIE_LIST)
		}
	}, [movies, searchString])

	return (
		<div className="grid w-full">
			{/* Movies */}
			<div className={`${tvMovies.length ? "block" : "hidden"} pb-4`}>
				<p className={`col-span-full py-2 text-lg font-bold text-white`}>
					Movies
				</p>
				{tvMovies.length > 0 ? (
					<div className="grid grid-cols-12 col-span-full gap-4 h-min">
						{tvMovies.map((movie, index) => (
							<div
								className="grid grid-cols-1 col-span-6 md:col-span-3 lg:col-span-2 text-white"
								key={index}
							>
								<MovieCard movie={movie} />
							</div>
						))}
					</div>
				) : null}
			</div>

			{/* Episodes */}
			<div className={`${episodes.length ? "block" : "hidden"} pb-4`}>
				<p className={`col-span-full py-2 text-lg font-bold text-white`}>
					Episodes
				</p>
				{episodes.length > 0 ? (
					<div className="grid grid-cols-12 col-span-full gap-4">
						{episodes.map((movie, index) => (
							<div
								className="grid grid-cols-1 col-span-6 md:col-span-3 lg:col-span-2 text-white"
								key={index}
							>
								<MovieCard movie={movie} />
							</div>
						))}
					</div>
				) : null}
			</div>

			{/* Series */}
			<div className={`${series.length ? "block" : "hidden"} pb-4`}>
				<p className={`col-span-full py-2 text-lg font-bold text-white`}>
					Series
				</p>
				{series.length > 0 ? (
					<div className="grid grid-cols-12 col-span-full gap-4">
						{series.map((movie, index) => (
							<div
								className="grid grid-cols-1 col-span-6 md:col-span-3 lg:col-span-2 text-white"
								key={index}
							>
								<MovieCard movie={movie} />
							</div>
						))}
					</div>
				) : null}
			</div>
		</div>
	)
}

export default SearchResults
