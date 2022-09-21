/**
 * Type castings for document
 *
 * @format
 */

export type LOOSEOBJECT = {
	[key: string]: any // Add index signature
}

let _LOOSEDOCUMENT: LOOSEOBJECT = {}
let _LOOSEWINDOW: LOOSEOBJECT = {}

if (typeof window !== "undefined") {
	_LOOSEDOCUMENT = document && (document as LOOSEOBJECT)
	_LOOSEWINDOW = window && (window as LOOSEOBJECT)
}

export const LOOSEDOCUMENT = _LOOSEDOCUMENT
export const LOOSEWINDOW = _LOOSEWINDOW
