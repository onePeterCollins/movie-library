/**
 * Axios requests
 *
 * @format
 */

import { OMDBAPI, UNOGSAPI } from "./client"
import { GETTITLESPAYLOAD, IDSEARCHPAYLOAD, TITLESEARCHPAYLOAD } from "../types"

export const getMoviesByTitle = async (params: TITLESEARCHPAYLOAD) => {
	return await OMDBAPI.get("", { params })
}

export const getMovieById = async (params: IDSEARCHPAYLOAD) => {
	return await OMDBAPI.get("", { params })
}

export const getMovieTitles = async (params: GETTITLESPAYLOAD) => {
	return await UNOGSAPI.get("", { params })
}
