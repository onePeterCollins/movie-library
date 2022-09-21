/**
 * Movie search functions
 *
 * @format
 */

import { AxiosResponse } from "axios"
import { getMovieById, getMoviesByTitle, getMovieTitles } from "../api"
import { MOVIE_TYPES } from "../constants"
import {
	IDSEARCHPAYLOAD,
	TITLESEARCHPAYLOAD,
	MOVIETYPE_LIST,
	MOVIE_LIST,
	GETTITLESPAYLOAD,
	MOVIE
} from "../types"

export const searchMovie = async (searchString: string) => {
	const movies: MOVIE_LIST = []
	const movieTypes: MOVIETYPE_LIST = MOVIE_TYPES

	// search by ID params
	const idPayload: IDSEARCHPAYLOAD = {
		callback: "",
		i: searchString,
		page: 10,
		plot: "short",
		r: "json",
		v: 1,
		y: ""
	}

	// search all movie types by title params and ID params
	await Promise.all(
		[
			movieTypes.map(async (movieType) => {
				const params: TITLESEARCHPAYLOAD = {
					callback: "",
					page: 10,
					plot: "short",
					r: "json",
					t: searchString,
					type: movieType,
					v: 1,
					y: ""
				}

				return await getMoviesByTitle(params)
			}),
			getMovieById(idPayload)
		].flat()
	)
		.then((results) => {
			results.map((result) => {
				if (result.data.Response === "True") {
					movies.push(result.data)
				}
			})
		})
		.catch((/* error */) => {
			// console.log(error)
		})

	return movies
}

export const searchForTitles = async (payload: GETTITLESPAYLOAD) => {
	return await getMovieTitles(payload)
}
