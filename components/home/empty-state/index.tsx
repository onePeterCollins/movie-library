/**
 * Empty state
 *
 * @format
 */

import {
	EMPTY_STATE_BG,
	SET_SUGGESTIONS,
	SUGGESTIONS
} from "../../../utils/constants"
import {
	searchForTitles,
	searchMovie
} from "../../../utils/helpers/searchFunctions"
import {
	DELETE_ERROR,
	DELETE_MOVIES,
	DELETE_SEARCH_STRING,
	DELETE_SELECTED_MOVIE,
	SET_ERROR,
	SET_MOVIES,
	SET_SEARCH_STRING,
	START_LOADING,
	STOP_LOADING
} from "../../../utils/constants"
import { useAppContext } from "../../../utils/state/appContext"
import { useEffect, useState } from "react"
import { TITLESEARCHRESULT } from "../../../utils/types"

const EmptyState = () => {
	const { suggestions, dispatch } = useAppContext()

	const [suggestion, setSuggestion] = useState(
		suggestions[Math.round(Math.random() * (suggestions.length - 1))]
	)

	const handleSubmit = (searchString: string) => {
		if (!searchString?.length) {
			dispatch({ type: DELETE_SEARCH_STRING, payload: "" })
			dispatch({ type: DELETE_SELECTED_MOVIE, payload: {} })
			dispatch({ type: DELETE_MOVIES, payload: [] })
			dispatch({ type: DELETE_ERROR, payload: {} })
			return
		}

		dispatch({ type: DELETE_MOVIES, payload: [] })
		dispatch({ type: START_LOADING, payload: true })
		dispatch({ type: SET_SEARCH_STRING, payload: searchString })

		if (navigator.onLine) {
			searchMovie(searchString).then((movies) => {
				const filteredMovies = movies.filter(
					(movie) => movie.Response === "True"
				)

				if (movies.length >= 0 && filteredMovies.length === 0) {
					dispatch({
						type: SET_ERROR,
						payload: { message: "It seems you are currently offline" }
					})
					dispatch({ type: STOP_LOADING, payload: false })
				} else {
					dispatch({ type: SET_MOVIES, payload: filteredMovies })
					dispatch({ type: SET_SEARCH_STRING, payload: searchString })
					dispatch({ type: STOP_LOADING, payload: false })
					dispatch({ type: DELETE_ERROR, payload: {} })
				}
			})
		} else {
			dispatch({
				type: SET_ERROR,
				payload: { message: "It seems you are currently offline" }
			})
		}
	}

	useEffect(() => {
		if (suggestions.length === SUGGESTIONS.length) {
			const randomOffset = Math.round(Math.random() * 1000)

			// fetch movie name suggestions
			if (navigator.onLine) {
				searchForTitles({
					limit: 100,
					offset: randomOffset,
					order_by: "date_asc"
				}).then((res) => {
					const newTitles = res.data
						? res.data.results.map((movie: TITLESEARCHRESULT) => movie?.title)
						: []

					// add new suggestions to state
					const newSuggestions = [...suggestions, ...newTitles].filter(
						(suggestion) => {
							const splitSuggestion = suggestion.split("")
							return (
								!(splitSuggestion.includes("&")) &&
								!(splitSuggestion.includes(";")) &&
								!(splitSuggestion.includes(":"))
							)
						}
					)

					setSuggestion(
						newSuggestions[
							Math.round(Math.random() * (newSuggestions.length - 1))
						]
					)
					dispatch({
						type: SET_SUGGESTIONS,
						payload: [...suggestions, ...newTitles]
					})
				})
			} else {
				dispatch({
					type: SET_ERROR,
					payload: { message: "It seems you are currently offline" }
				})
			}
		}
	}, [dispatch, suggestions])

	return (
		<div className="grid w-full h-full items-center justify-center">
			<div onClick={() => handleSubmit(suggestion)} className="cursor-pointer">
				<img
					className="mx-auto"
					style={{ width: "400px", height: "200px" }}
					src={EMPTY_STATE_BG}
					alt="no results to show"
				/>
				<p className="text-lg font-bold text-center text-white">
					Don&apos;t know what to search?
				</p>
				<p className="text-md text-center text-white">
					Here&apos;s an offer you can&apos;t refuse
				</p>
			</div>
		</div>
	)
}

export default EmptyState
