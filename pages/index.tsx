/** @format */

import type { NextPage } from "next"
import Head from "next/head"
import { ReactNode } from "react"
import SearchForm from "../components/home/search-form"
import SearchResults from "../components/home/search-results"
import AppLayout from "../layouts/app"
import SearchPageLayout from "../layouts/search-page"
import { SEARCHLAYOUTPROPTYPES } from "../layouts/search-page/props.types"
import { APP_NAME } from "../utils/constants"

const Home: NextPage = () => {
	const searchLayoutProps: SEARCHLAYOUTPROPTYPES = {
		error: undefined,
		noResults: undefined,
		searchForm: ((): ReactNode => <SearchForm />)(),
		searchResults: ((): ReactNode => <SearchResults />)()
	}

	const { searchForm, searchResults, noResults, error } = searchLayoutProps

	return (
		<AppLayout className="">
			<Head>
				<title>
					<>{APP_NAME} | Search by title or IMDB id</>
				</title>
				<meta name="description" content="Movies search app" />
				<link rel="icon" href="/favicons/favicon.ico" />
			</Head>

			<main className="w-full h-full">
				<SearchPageLayout
					error={error}
					noResults={noResults}
					searchForm={searchForm}
					searchResults={searchResults}
				/>
			</main>
		</AppLayout>
	)
}

export default Home
