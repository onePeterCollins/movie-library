/**
 * Movie details
 *
 * @format
 */

import {
	HEART_ICON_FULL,
	HEART_ICON_OUTLINED,
	IMAGE_PLACEHOLDER,
	LEFT_ARROW_ICON_GRAY,
	RATINGS_PROVIDERS,
	SET_FAVOURITES,
	UPDATE_FAVOURITES
} from "../../../utils/constants"
import { useAppContext } from "../../../utils/state/appContext"
import { MOVIE, MOVIE_LIST, RATINGS, RATINGS_LIST } from "../../../utils/types"
import Button from "../../button"
import Ratings from "../ratings"

const MovieDetails = () => {
	const { favourites, selectedMovie, dispatch } = useAppContext()
	const favouritesArr = favourites as MOVIE_LIST

	const isFavourite = favouritesArr.includes(selectedMovie)

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
	// console.log(selectedMovie)

	const handleReturn = () => {
		window.history.back()
	}

	const formattedRatings = selectedMovie.Ratings.map((rating) => {
		return RATINGS_PROVIDERS.map((provider) => {
			if (rating.Source === provider.Source) {
				const formattedRating: RATINGS = {
					Source: rating.Source,
					Value: rating.Value,
					bgColor: provider.bgColor,
					icon: provider.icon
				}

				return formattedRating
			}
		}).filter((item) => !!item) as RATINGS_LIST
	}).flat()

	return (
		<div className="w-full h-full">
			{/* Top */}
			<section>
				<Button
					type={"button"}
					onClick={handleReturn}
					className="h-10 px-3"
					icon={LEFT_ARROW_ICON_GRAY}
					hoverIcon={LEFT_ARROW_ICON_GRAY}
					iconPosition={"left"}
					text={""}
					disabled={false}
				/>
			</section>

			{/* Details */}
			<section className="grid grid-cols-2 gap-12 mt-4 mb-12">
				{/* left column */}
				<div className="grid col-span-2 md:col-span-1 h-full">
					{/* Runtime & year */}
					<p className="grid grid-flow-col items-center justify-start">
						<span className="text-sm text-gray-500">
							{selectedMovie.Runtime}
						</span>
						<span className="text-sm text-gray-500 px-2 pb-2">.</span>
						<span className="text-sm text-gray-500">{selectedMovie.Year}</span>
						<span className="text-sm text-gray-500 px-2 pb-2">.</span>
						<span className="text-sm font-medium rounded p-1 bg-gray-400">
							{selectedMovie.Rated}
						</span>
					</p>

					{/* Title */}
					<h1 className="text-6xl md:text-5xl leading-12 pt-4 font-bold text-white">
						{selectedMovie.Title}
					</h1>

					{/* Ratings */}
					<div className="flex items-center w-full py-2 mt-8">
						{formattedRatings.map((rating, index) => {
							const { Source, Value, bgColor, icon } = rating as RATINGS
							return (
								<span className="inline-flex items-center h-full" key={index}>
									{
										<Ratings
											key={index}
											Source={Source}
											Value={Value}
											bgColor={bgColor}
											icon={icon}
										/>
									}
								</span>
							)
						})}

						{/* Favourites button desktop */}
						<Button
							type={"button"}
							onClick={() => {
								isFavourite
									? removeFavourite(selectedMovie)
									: addToFavourites(selectedMovie)
							}}
							className="hidden xl:inline border-2 border-gray-800 text-sm text-gray-500 p-2 rounded"
							icon={undefined}
							hoverIcon={undefined}
							iconPosition={"right"}
							text={
								<>
									{isFavourite ? (
										<div className="flex items-center">
											<span className="mr-2">
												<i>
													<img
														style={{ width: "16px", height: "16px" }}
														src={HEART_ICON_FULL}
														alt="heart icon full"
													/>
												</i>
											</span>

											<span>Added to favourites</span>
										</div>
									) : (
										<span className="flex items-center">
											<span className="mr-2">
												<i>
													<img
														style={{ width: "16px", height: "16px" }}
														src={HEART_ICON_OUTLINED}
														alt="heart icon"
													/>
												</i>
											</span>

											<span>Add to favourites</span>
										</span>
									)}
								</>
							}
							disabled={false}
						/>
					</div>

					{/* Favourites button mobile & tablet */}
					<Button
						type={"button"}
						onClick={() => {
							isFavourite
								? removeFavourite(selectedMovie)
								: addToFavourites(selectedMovie)
						}}
						className="block xl:hidden w-fit border-2 border-gray-800 text-sm text-gray-500 p-2 mt-4 rounded"
						icon={undefined}
						hoverIcon={undefined}
						iconPosition={"right"}
						text={
							<>
								{isFavourite ? (
									<div className="flex items-center">
										<span className="mr-2">
											<i>
												<img
													style={{ width: "16px", height: "16px" }}
													src={HEART_ICON_FULL}
													alt="heart icon full"
												/>
											</i>
										</span>

										<span>Added to favourites</span>
									</div>
								) : (
									<span className="flex items-center">
										<span className="mr-2">
											<i>
												<img
													style={{ width: "16px", height: "16px" }}
													src={HEART_ICON_OUTLINED}
													alt="heart icon"
												/>
											</i>
										</span>

										<span>Add to favourites</span>
									</span>
								)}
							</>
						}
						disabled={false}
					/>

					{/* Poster mobile */}
					<div className="grid md:hidden grid-cols-1 mt-12">
						<img
							src={
								selectedMovie?.Poster?.length < 10
									? IMAGE_PLACEHOLDER
									: selectedMovie.Poster
							}
							alt={selectedMovie.Title}
							className="w-full object-contain object-top rounded-lg"
						/>
					</div>

					{/* Plot */}
					<div className="mt-12">
						<p className="text-sm font-medium text-gray-500">Plot</p>
						<p className="text-sm font-medium text-gray-200 mt-2">
							{selectedMovie.Plot}
						</p>
					</div>

					<div className="flex gap-12 mt-12">
						<div>
							<p className="text-sm font-medium text-gray-500">Cast</p>
							{selectedMovie.Actors?.split(",")?.map((actor, index) => (
								<p
									key={index}
									className="text-sm font-medium text-gray-200 mt-2"
								>
									{actor}
								</p>
							))}
						</div>

						<div>
							<p className="text-sm font-medium text-gray-500">Genre</p>
							{selectedMovie.Genre?.split(",")?.map((genre, index) => (
								<p
									key={index}
									className="text-sm font-medium text-gray-200 mt-2"
								>
									{genre}
								</p>
							))}
						</div>

						<div>
							<p className="text-sm font-medium text-gray-500">Director</p>
							{selectedMovie.Director?.split(",")?.map((director, index) => (
								<p
									key={index}
									className="text-sm font-medium text-gray-200 mt-2"
								>
									{director}
								</p>
							))}
						</div>
					</div>
				</div>

				{/* right column desktop & tablet */}
				<div className="hidden md:grid grid-cols-1">
					<img
						src={
							selectedMovie?.Poster?.length < 10
								? IMAGE_PLACEHOLDER
								: selectedMovie.Poster
						}
						alt={selectedMovie.Title}
						className="w-[80%] ml-auto xl:mr-auto object-cover object-top rounded-lg"
					/>
				</div>
			</section>
		</div>
	)
}

export default MovieDetails
