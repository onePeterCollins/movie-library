/**
 * Axios client setup
 *
 * @format
 */

import axios from "axios"
import {
	OMDB_API_KEY,
	OMDB_API_TIMEOUT,
	OMDB_API_URL,
	UNOGS_HOST_URL,
	UNOGS_API_KEY,
	UNOGS_API_TIMEOUT,
	UNOGS_API_URL
} from "../constants"
import { STRING_NUMBER_OR_BOOLEAN } from "../types"

const OMDBApiUrl = `${OMDB_API_URL}/?apikey=${OMDB_API_KEY}`

// OMDB API Axios instance
export const OMDBAPI = axios.create({
	baseURL: OMDBApiUrl,
	timeout: OMDB_API_TIMEOUT,
	headers: {
		"Content-Type": "application/json"
	}
})

// uNoGS API Axios instance
export const UNOGSAPI = axios.create({
	baseURL: UNOGS_API_URL,
	timeout: UNOGS_API_TIMEOUT,
	headers: {
		"X-RapidAPI-Host": UNOGS_HOST_URL as STRING_NUMBER_OR_BOOLEAN,
		"X-RapidAPI-Key": UNOGS_API_KEY as STRING_NUMBER_OR_BOOLEAN
	}
})
