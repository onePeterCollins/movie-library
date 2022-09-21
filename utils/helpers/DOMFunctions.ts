/**
 * DOM Functions
 *
 * @format
 */

import { LOOSEDOCUMENT } from "../types"

/**
 * @param element => element: HTML DOM element
 * @param property => property: String
 */
export const getComputedStyles = (element: HTMLElement, property: string) => {
	let value
	let style

	if (window.getComputedStyle) {
		style = window.getComputedStyle(element)?.getPropertyValue(property)
	} else if (document.defaultView) {
		style = LOOSEDOCUMENT.defaultView(element)?.getPropertyValue(property)
	}

	// TEST WHETHER THE STYLE IS A STRING OR NUMBER VALUE
	let p = style?.split("")?.reverse()?.splice(1, 1) // check if the value ends with 'PX'
	let x = style?.split("")?.reverse()?.shift(0) // check if the value ends with 'PX'
	let num = style?.split("").reverse()?.splice(2, 1)?.join("") * 1

	if (
		p.toUpperCase() === "P" &&
		x.toUpperCase() === "X" &&
		typeof num === "number"
	) {
		value = parseInt(style, 10)
	} else {
		value = style
	}
	return value
}
