/**
 * Safe hydrate component to surpress errors during hydration
 *
 * @format
 */

import dynamic from "next/dynamic"
import { SAFE_HYDRATE_PROPS } from "./props.types"

const SafeHydrate = ({ children }: SAFE_HYDRATE_PROPS) => {
	return (
		<div suppressHydrationWarning>
			{typeof window === "undefined" ? null : children}
		</div>
	)
}

export default dynamic(() => Promise.resolve(SafeHydrate), { ssr: false })
