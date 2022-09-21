/**
 * App state
 *
 * @format
 */

import { createContext, ReactElement, useContext, useReducer } from "react"
import { Context } from "react"
import { SUGGESTIONS } from "../constants"
import { ERROR, MOVIE, STATE } from "../types"
import { APPPROVIDERPROPS } from "./props.types"
import appReducer from "./reducer"

const persistentState =
	typeof window !== "undefined"
		? JSON.parse(sessionStorage.getItem("state") || "{}")
		: {}
const initialState: STATE =
	Object.entries(persistentState).length > 0
		? persistentState
		: {
				error: {} as ERROR,
				favourites: [],
				loading: false,
				movies: [],
				searchString: "",
				selectedMovie: {} as MOVIE,
				suggestions: SUGGESTIONS,
				dispatch: () => {
					return
				}
		  }

const AppStateContext: Context<STATE> = createContext(initialState)

const AppProvider = ({ children }: APPPROVIDERPROPS): ReactElement => {
	const [state, dispatch] = useReducer(appReducer, initialState)

	return (
		<AppStateContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AppStateContext.Provider>
	)
}

const useAppContext = () => {
	const context = useContext(AppStateContext)

	if (!context) {
		throw new Error("useAppContext must be used within an AppProvider")
	}

	return context
}

export { AppProvider, useAppContext }
