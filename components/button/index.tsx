/**
 * Button
 *
 * @format
 */

import { useState } from "react"
import { BUTTONPROPS } from "./props.types"

const Button = ({
	icon,
	hoverIcon,
	iconPosition,
	onClick,
	text,
	className,
	disabled
}: BUTTONPROPS) => {
	const [hover, setHover] = useState(false)

	const handleMouseEnter = () => {
		if (hoverIcon) {
			setHover(true)
		}
	}

	const handleMouseLeave = () => {
		if (hoverIcon) {
			setHover(false)
		}
	}

	return (
		<button
			className={className}
			onClick={onClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseOver={handleMouseEnter}
			disabled={disabled ? true : false}
		>
			{iconPosition === "left" && icon?.length ? (
				<i>
					<img src={hover ? hoverIcon : icon} alt={"icon"} />
				</i>
			) : !iconPosition && icon?.length ? (
				<i>
					<img src={hover ? hoverIcon : icon} alt={"icon"} />
				</i>
			) : null}

			{text}

			{iconPosition === "right" && icon?.length ? (
				<i>
					<img src={hover ? hoverIcon : icon} alt={"icon"} />
				</i>
			) : null}
		</button>
	)
}

export default Button
