/**
 * Search page layout
 *
 * @format
 */

import { createRef, RefObject, useEffect, useState } from "react"
import EmptyState from "../../components/home/empty-state"
import ErrorState from "../../components/error-state"
import Loader from "../../components/loader"
import { useAppContext } from "../../utils/state/appContext"
import { ERROR, MOVIE_LIST_OR_EMPTY } from "../../utils/types"
import { SEARCHLAYOUTPROPTYPES } from "./props.types"

const SearchPageLayout = ({
	searchForm,
	searchResults,
	noResults,
	error: errorComponent
}: SEARCHLAYOUTPROPTYPES) => {
	const formRef: RefObject<HTMLElement> = createRef()
	const [minHeight, setMinHeight] = useState(0)
	const { error, loading, movies } = useAppContext()
	const loadedMovies = (() => movies as MOVIE_LIST_OR_EMPTY)()
	const errorMsg = (() => error as ERROR)()
	useEffect(() => {
		const headerEl = formRef.current

		if (headerEl) {
			setMinHeight(window.innerHeight - headerEl.offsetHeight)
		} else {
			setMinHeight(1)
		}
	}, [formRef])

	return (
		<div className="w-full h-full">
			<section ref={formRef} className="grid grid-cols-1 w-full justify-center">
				{searchForm}
			</section>

			<section
				style={{ minHeight: `${minHeight}px` }}
				className={`grid grid-cols-1 w-full justify-center mt-6`}
			>
				{loading ? (
					<Loader />
				) : !loading && loadedMovies.length ? (
					searchResults
				) : errorMsg.message ? (
					errorComponent || <ErrorState />
				) : !loading && !loadedMovies.length ? (
					noResults || <EmptyState />
				) : null}
			</section>
		</div>
	)
}

export default SearchPageLayout
