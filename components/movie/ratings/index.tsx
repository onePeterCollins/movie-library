/**
 * Ratings component
 *
 * @format
 */

import { useEffect, useRef, useState } from "react"
import { RATINGS } from "../../../utils/types"

const Ratings = ({ Source, Value, icon, bgColor }: RATINGS) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const [containerHeight, setContainerHeigt] = useState(0)
	const [mounted, setMounted] = useState(false)
	const formattedValue = (value: string) => {
		if (
			(value.includes("/") && Source === "Rotten Tomatoes") ||
			(value.includes("/") && Source === "Metacritic")
		) {
			return `${value.split("/")[0]}%`
		} else if (value.includes("/") && Source === "Internet Movie Database") {
			return `${value.split("/")[0]}`
		} else if (value.includes("%")) {
			return value
		} else {
			return `${value}/10`
		}
	}

	useEffect(() => {
		const container = containerRef.current

		if (container) {
			setContainerHeigt(container.offsetHeight)
		} else {
			setMounted(true)
		}
	}, [bgColor, containerRef, mounted])

	return (
		<span className="inline-flex border-2 border-gray-800 rounded mr-3 overflow-hidden">
			<span
				style={{
					width: `${containerHeight}px`,
					height: `${containerHeight}px`,
					backgroundColor: `${bgColor}`
				}}
				className="h-full px-2 overflow-hidden"
			>
				<img
					style={{
						height: `${containerHeight}px`,
						backgroundColor: `${bgColor}`
					}}
					src={icon}
					alt="IMDB logo"
					className="object-contain object-center"
				/>
			</span>
			<span ref={containerRef} className="text-sm text-gray-500 p-2">
				{formattedValue(Value)}
			</span>
		</span>
	)
}

export default Ratings
