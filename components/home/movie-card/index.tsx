/**
 * Movie card for search results
 *
 * @format
 */

import Link from "next/link"
import { createRef, RefObject, useEffect, useState } from "react"
import {
	SET_FAVOURITES,
	HEART_ICON_FULL,
	HEART_ICON_OUTLINED,
	IMAGE_PLACEHOLDER,
	UPDATE_FAVOURITES,
	SET_SELECTED_MOVIE
} from "../../../utils/constants"
import { useAppContext } from "../../../utils/state/appContext"
import { MOVIE, MOVIE_LIST } from "../../../utils/types"
import Button from "../../button"
import { MOVIECARDPROPS } from "./props.types"

const MovieCard = ({ movie }: MOVIECARDPROPS) => {
	const { Poster, Title, Year } = movie

	const [cardHeight, setCardHeight] = useState(0)
	const imgRef: RefObject<HTMLImageElement> = createRef()
	const [loading, setLoading] = useState(false)
	const { favourites, selectedMovie, dispatch } = useAppContext()

	const favouritesArr = favourites as MOVIE_LIST

	const isFavourite = favouritesArr.includes(movie)

	const addToFavourites = (movie: MOVIE) => {
		if (!favouritesArr.includes(movie)) {
			return dispatch({
				type: SET_FAVOURITES,
				payload: [...favouritesArr, movie]
			})
		}
	}

	const removeFavourite = (movie: MOVIE) => {
		if (favouritesArr.includes(movie)) {
			const payload = favouritesArr.filter((item) => item !== movie)
			return dispatch({ type: UPDATE_FAVOURITES, payload })
		}
	}

	const setSelectedMovie = (movie: MOVIE) => {
		if (selectedMovie !== movie) {
			sessionStorage.setItem("selectedMovie", JSON.stringify(movie))
			return dispatch({ type: SET_SELECTED_MOVIE, payload: movie })
		}
	}

	// trigger refresh after image has loaded
	useEffect(() => {
		const imgEL = imgRef.current

		if (imgEL) {
			if (cardHeight === 0 || loading) {
				imgEL.decode()
					.then(() => {
						setLoading(false)
						setCardHeight(imgEL.clientHeight)
					})
					.catch(() => {
						setLoading(false)
						setCardHeight(imgEL.clientHeight)
					})

				setCardHeight(imgEL.offsetHeight)
			}
		} else {
			// trigger initial update
			if (loading === false) {
				setLoading(true)
			}
		}
	}, [cardHeight, imgRef, loading, Poster])

	return (
		<div
			style={{ height: `${cardHeight}px` }}
			className="w-full h-full overflow-hidden"
		>
			<Link href="/movie">
				<a onClick={() => setSelectedMovie(movie)}>
					<img
						ref={imgRef}
						src={Poster.length < 10 ? IMAGE_PLACEHOLDER : Poster}
						className="object-cover"
						alt=""
					/>

					<div
						style={{ height: `${cardHeight}px`, top: `-${cardHeight}px` }}
						className="grid grid-rows-1 grid-flow-row grid-cols-1 justify-between w-full relative p-2 opacity-0 hover:opacity-100 hover:bg-backdrop"
					>
						<div className="grid items-start justify-end">
							<Button
								type={"submit"}
								onClick={(e) => {
									e.preventDefault()
									e.stopPropagation()
									isFavourite ? removeFavourite(movie) : addToFavourites(movie)
								}}
								className="relative z-10"
								icon={undefined}
								hoverIcon={undefined}
								iconPosition={"left"}
								disabled={false}
								text={
									<>
										{isFavourite ? (
											<i>
												<img
													style={{ width: "16px", height: "16px" }}
													src={HEART_ICON_FULL}
													alt="heart icon full"
												/>
											</i>
										) : (
											<i>
												<img
													style={{ width: "16px", height: "16px" }}
													src={HEART_ICON_OUTLINED}
													alt="heart icon outlined"
												/>
											</i>
										)}
									</>
								}
							/>
						</div>

						<div>
							<p className="text-lg text-white font-medium">{Title}</p>
							<p className="text-sm text-white">{Year}</p>
						</div>
					</div>
				</a>
			</Link>
		</div>
	)
}

export default MovieCard
