/**
 * Request types
 *
 * @format
 */

export type STRING_NUMBER_OR_BOOLEAN = string | number | boolean
export type MOVIETYPE = "movie" | "series" | "episode"
export type MOVIETYPE_LIST = MOVIETYPE[]
export type IDSEARCHPAYLOAD = {
	callback: string | undefined // callback function name
	i: string // imdbID
	page: number // page (default 1) (valid values: 1 - 100)
	plot: "short" | "full" // plot
	r: "json" | "xml" // response format
	v: number // api version
	y: string | undefined // year
}

export type TITLESEARCHPAYLOAD = {
	callback: string | undefined // callback function name
	page: number // page (default 1) (valid values: 1 - 100)
	plot: "short" | "full" // plot
	r: "json" | "xml" // response format
	t: string // title
	type: MOVIETYPE // type
	v: number // api version
	y: string | undefined // year
}

export type GETTITLESPAYLOAD = {
	limit: number // limit (default 10) (valid values: 1 - 100)
	offset: number // offset (default 0) (valid values: 0 - 1000)
	order_by:
		| "date_asc"
		| "date_desc"
		| "rating_asc"
		| "rating_desc"
		| "title_asc"
		| "title_desc" // order by
}
