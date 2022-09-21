/**
 * Environment variables
 *
 * @format
 */

export const APP_NAME = process.env.APP_NAME
export const OMDB_API_KEY = process.env.OMDB_API_KEY
export const OMDB_API_TIMEOUT: number = parseInt(
	process.env.OMDB_API_TIMEOUT as string
)
export const OMDB_API_URL = process.env.OMDB_API_URL
export const UNOGS_API_KEY = process.env.UNOGS_API_KEY
export const UNOGS_API_TIMEOUT: number = parseInt(
	process.env.UNOGS_API_TIMEOUT as string
)
export const UNOGS_API_URL = process.env.UNOGS_API_URL
export const UNOGS_HOST_URL = process.env.UNOGS_HOST_URL
export const MOVIE_TYPES = JSON.parse(JSON.stringify(process.env.MOVIE_TYPES))
export const EMPTY_STATE_BG = process.env.EMPTY_STATE_BG
export const HEART_ICON_OUTLINED = process.env.HEART_ICON_OUTLINED
export const HEART_ICON_FULL = process.env.HEART_ICON_FULL
export const LEFT_ARROW_ICON_GRAY = process.env.LEFT_ARROW_ICON_GRAY
export const IMAGE_PLACEHOLDER = process.env.IMAGE_PLACEHOLDER
export const LOGO_WHATS_IN = process.env.LOGO_WHATS_IN
export const SEARCH_ICON = process.env.SEARCH_ICON
export const IMDB_ICON = process.env.IMDB_ICON
export const METACRITIC_ICON = process.env.METACRITIC_ICON
export const ROTTEN_TOMATOES_ICON = process.env.ROTTEN_TOMATOES_ICON
