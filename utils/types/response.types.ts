/**
 * Response types
 *
 * @format
 */

export type RATINGS = {
	Source: string
	Value: string
	icon: string
	bgColor: string
}

export type RATINGS_OR_EMPTY = RATINGS | object

export type RATINGS_LIST = RATINGS[]

export type RATINGS_LIST_OR_EMPTY = RATINGS_LIST | []

export type MOVIE = {
	Title: string
	Year: string
	Rated: string
	Released: string
	Runtime: string
	Genre: string
	Director: string
	Writer: string
	Actors: string
	Plot: string
	Language: string
	Country: string
	Awards: string
	Poster: string
	Ratings: RATINGS_LIST
	Metascore: string
	imdbRating: string
	imdbVotes: string
	imdbID: string
	Type: string
	DVD: string
	BoxOffice: string
	Production: string
	Website: string
	Response: string
}

export type MOVIE_OR_EMPTY = MOVIE | object

export type MOVIE_LIST = MOVIE[]

export type MOVIE_LIST_OR_EMPTY = MOVIE_LIST | []

export type TITLESEARCHRESULT = {
	title: string
}
