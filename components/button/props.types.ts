/**
 * Button prop types
 *
 * @format
 */

import { ReactNode } from "react"

export type BUTTONPROPS = {
	className: string | undefined
	disabled: boolean | undefined
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
	type: "button" | "submit" | "reset"
	icon: string | undefined
	hoverIcon: string | undefined
	iconPosition: "left" | "right"
	text: string | ReactNode | undefined
}
