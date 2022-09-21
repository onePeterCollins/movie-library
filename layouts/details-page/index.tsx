/**
 * Movie details layout
 *
 * @format
 */
import { useEffect, useState } from "react"
import SelectMovie from "../../components/movie/select-movie"
import { useAppContext } from "../../utils/state/appContext"
import { MOVIE } from "../../utils/types"
import { DETAILSLAYOUTPROPS } from "./props.types"

const DetailsPageLayout = ({ movieDetails }: DETAILSLAYOUTPROPS) => {
	const { selectedMovie } = useAppContext()
	const [mounted, setMounted] = useState(true)
	const [cachedMovie, setCachedMovie] = useState({})
	const [pgHeight, setPgHeight] = useState(0)

	const movie =
		selectedMovie || cachedMovie ? selectedMovie || cachedMovie : ({} as MOVIE)

	const noSelection = Object.entries(movie).length === 0

	useEffect(() => {
		if (!mounted) {
			setMounted(true)

			const cachedMovie = JSON.parse(
				sessionStorage.getItem("selectedMovie") as string
			) as MOVIE
			setCachedMovie(cachedMovie)
		}
	}, [mounted, cachedMovie])

	useEffect(() => {
		const headerHeight = document.getElementsByTagName("header")[0].clientHeight
		if (headerHeight) {
			setPgHeight(window.innerHeight - headerHeight)
		}
	}, [mounted, pgHeight])

	return (
		<div
			style={{ height: `${pgHeight}px` }}
			className="grid grid-cols-1 w-full"
		>
			<section className="grid grid-cols-1 col-span-full h-full justify-center">
				{noSelection ? <SelectMovie /> : movieDetails}
			</section>
		</div>
	)
}

export default DetailsPageLayout
