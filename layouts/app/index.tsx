/**
 * App layout
 *
 * @format
 */

import Header from "../../components/header"
import { APPLAYOUTPROPTYPES } from "./props.types"

// use the className prop to pass background color to the layout
const AppLayout = ({ className, children }: APPLAYOUTPROPTYPES) => {
	return (
		<div
			className={`w-screen min-h-screen px-6 lg:px-40 ${
				!className ? "bg-black" : className
			} overflow-y-auto`}
		>
			<Header />
			<>{children}</>
		</div>
	)
}

export default AppLayout
