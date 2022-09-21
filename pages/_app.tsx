/** @format */

import "../styles/globals.css"
import "../styles/tailwind.css"
import type { AppProps } from "next/app"
import { AppProvider } from "../utils/state/appContext"
import { useEffect } from "react"
import SafeHydrate from "../layouts/_safe-hydrate"

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		if (typeof window !== "undefined") {
			// add event handler to clear errors from session storage before unload
			window.addEventListener("beforeunload", () => {
				const currentState = JSON.parse(
					sessionStorage.getItem("state") as string
				)
				const hasError = currentState?.error?.message

				if (hasError) {
					const newState = { ...currentState, error: {} }
					sessionStorage.setItem("state", JSON.stringify(newState))
				}
			})
		}
	}, [])

	return (
		<SafeHydrate>
			<AppProvider>
				<Component {...pageProps} />
			</AppProvider>
		</SafeHydrate>
	)
}

export default MyApp
