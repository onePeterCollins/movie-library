/**
 * Global constants
 *
 * @format
 */

import { RATINGS } from "../types"
import { IMDB_ICON, METACRITIC_ICON, ROTTEN_TOMATOES_ICON } from "./env"

export const SUGGESTIONS = [
	"bean",
	"2012",
	"mary",
	"call of duty",
	"game of thrones",
	"pacific rim",
	"automata",
	"hitman",
	"american sniper",
	"legion",
	"top gear",
	"big brother",
	"john",
	"shark",
	"gravity"
]

// rating providers
const IMDB: RATINGS = {
	Source: "Internet Movie Database",
	Value: "",
	icon: IMDB_ICON as string,
	bgColor: "#f3ce13"
}

const METACRITIC: RATINGS = {
	Source: "Metacritic",
	Value: "",
	icon: METACRITIC_ICON as string,
	bgColor: "#ffffff"
}

const ROTTEN_TOMATOES: RATINGS = {
	Source: "Rotten Tomatoes",
	Value: "",
	icon: ROTTEN_TOMATOES_ICON as string,
	bgColor: "#ff4040"
}

export const RATINGS_PROVIDERS = [IMDB, ROTTEN_TOMATOES, METACRITIC]
