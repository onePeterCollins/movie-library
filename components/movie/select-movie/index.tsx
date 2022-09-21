/**
 * Select movie
 *
 * @format
 */

import Link from "next/link"
import { EMPTY_STATE_BG } from "../../../utils/constants"

const SelectMovie = () => {
	return (
		<div className="grid col-span-full h-full items-center">
			<div className="cursor-pointer">
				<Link href="/">
					<a>
						<img
							className="mx-auto"
							style={{ width: "400px", height: "200px" }}
							src={EMPTY_STATE_BG}
							alt="no movie selected"
						/>
						<h1 className="text-lg text-center font-bold text-white">
							Select a movie
						</h1>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default SelectMovie
