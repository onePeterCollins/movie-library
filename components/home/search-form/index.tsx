/**
 * Landing page search form
 *
 * @format
 */

import { useEffect, useState } from "react"
import {
	DELETE_ERROR,
	DELETE_MOVIES,
	DELETE_SEARCH_STRING,
	DELETE_SELECTED_MOVIE,
	SEARCH_ICON,
	SET_ERROR,
	SET_MOVIES,
	SET_SEARCH_STRING,
	START_LOADING,
	STOP_LOADING
} from "../../../utils/constants"
import { searchMovie } from "../../../utils/helpers/searchFunctions"
import { useAppContext } from "../../../utils/state/appContext"
import Button from "../../button"

const SearchForm = () => {
	const [searchString, setSearchString] = useState("")
	const { searchString: searchStr, dispatch } = useAppContext()

	const _searchString = (() => searchStr as string)()

	const handleSearchStringChange = (searchString: string) => {
		setSearchString(searchString)
		dispatch({ type: SET_SEARCH_STRING, payload: searchString })
	}

	const handleSubmit = async () => {
		if (!searchString.length) {
			dispatch({ type: DELETE_SEARCH_STRING, payload: "" })
			dispatch({ type: DELETE_SELECTED_MOVIE, payload: {} })
			dispatch({ type: DELETE_MOVIES, payload: [] })
			dispatch({ type: DELETE_ERROR, payload: {} })
			return
		}

		dispatch({ type: DELETE_MOVIES, payload: [] })
		dispatch({ type: START_LOADING, payload: true })

		if (navigator.onLine) {
			searchMovie(searchString).then((movies) => {
				if (movies.length >= 0 && movies.length === 0) {
					dispatch({
						type: SET_ERROR,
						payload: { message: "It seems you are currently offline" }
					})
					dispatch({ type: STOP_LOADING, payload: false })
				} else {
					dispatch({ type: SET_MOVIES, payload: movies })
					dispatch({ type: SET_SEARCH_STRING, payload: searchString })
					dispatch({ type: DELETE_SELECTED_MOVIE, payload: {} })
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
		setSearchString(_searchString)
	}, [_searchString])

	useEffect(() => {
		dispatch({ type: DELETE_ERROR, payload: {} })
	}, [dispatch])

	return (
		<div className="grid col-span-full">
			<form
				className="flex col-span-full rounded overflow-hidden"
				onSubmit={(e) => {
					e.preventDefault()
					e.stopPropagation
					handleSubmit()
				}}
			>
				<Button
					type={"submit"}
					onClick={() => null}
					className="h-full px-4 items-center justify-center bg-white"
					icon={SEARCH_ICON}
					hoverIcon={SEARCH_ICON}
					iconPosition={"left"}
					text={""}
					disabled={false}
				/>
				<input
					className="grid w-full text-md py-2 bg-white outline-none capitalize"
					type="text"
					placeholder="Search movies..."
					value={searchString || _searchString}
					onChange={(e) => handleSearchStringChange(e.target.value)}
				/>
			</form>
		</div>
	)
}

export default SearchForm
