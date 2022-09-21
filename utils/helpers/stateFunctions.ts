/**
 * Persist app state
 *
 * @format
 */

import { PAYLOAD, STATE } from "../types"

export const updatePersistentState = (state: STATE) => {
	return (_field: string, _payload: PAYLOAD) => {
		const updatedState = {
			...state,
			[_field]: _payload
		}

		sessionStorage.setItem("state", JSON.stringify(updatedState))
		return updatedState
	}
}
