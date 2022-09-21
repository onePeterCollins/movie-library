/**
 * App state reducer
 *
 * @format
 */

import {
	SET_ERROR,
	DELETE_ERROR,
	SET_FAVOURITES,
	UPDATE_FAVOURITES,
	SET_SEARCH_STRING,
	DELETE_SEARCH_STRING,
	START_LOADING,
	STOP_LOADING,
	SET_MOVIES,
	DELETE_MOVIES,
	SET_SELECTED_MOVIE,
	DELETE_SELECTED_MOVIE,
	SET_SUGGESTIONS,
	DELETE_SUGGESTIONS
} from "../constants"
import { updatePersistentState } from "../helpers"
import { ACTION, ERROR, MOVIE, MOVIE_LIST_OR_EMPTY, STATE } from "../types"

const appReducer = (state: STATE, action: ACTION): STATE => {
	const { type: actionType, payload }: ACTION = action
	const newState = updatePersistentState(state)

	switch (actionType) {
		case SET_ERROR:
			return newState("error", payload as ERROR)

		case DELETE_ERROR:
			return newState("error", {})

		case SET_FAVOURITES:
			return newState("favourites", payload as MOVIE_LIST_OR_EMPTY)

		case UPDATE_FAVOURITES:
			return newState("favourites", payload as MOVIE_LIST_OR_EMPTY)

		case SET_SEARCH_STRING:
			return newState("searchString", payload as string)

		case DELETE_SEARCH_STRING:
			return newState("searchString", "")

		case START_LOADING:
			return newState("loading", true)

		case STOP_LOADING:
			return newState("loading", false)

		case SET_MOVIES:
			return newState("movies", payload as MOVIE_LIST_OR_EMPTY)

		case DELETE_MOVIES:
			return newState("movies", [] as MOVIE_LIST_OR_EMPTY)

		case SET_SELECTED_MOVIE:
			return newState("selectedMovie", payload as MOVIE)

		case DELETE_SELECTED_MOVIE:
			return newState("selectedMovie", {} as MOVIE)

		case SET_SUGGESTIONS:
			return newState("suggestions", payload as string[])

		case DELETE_SUGGESTIONS:
			return newState("suggestions", [])

		default:
			return state
	}
}

export default appReducer
