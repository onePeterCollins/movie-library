/**
 * Object types in app state
 *
 * @format
 */

import { Dispatch } from "react"
import { MOVIE_OR_EMPTY, MOVIE_LIST_OR_EMPTY, MOVIE } from "./response.types"

export type ERROR = {
	message: string
}
export type PAYLOAD =
	| boolean
	| string
	| string[]
	| MOVIE_OR_EMPTY
	| MOVIE_LIST_OR_EMPTY
	| ERROR
export type ACTION = {
	type: string
	payload: PAYLOAD
}

export type DISPATCH = Dispatch<ACTION>

export type STATE = {
	error: ERROR
	favourites: MOVIE_LIST_OR_EMPTY
	loading: boolean
	movies: MOVIE_LIST_OR_EMPTY
	searchString: string
	selectedMovie: MOVIE
	suggestions: string[]
	dispatch: DISPATCH
}
