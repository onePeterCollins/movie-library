/**
 * Error state
 *
 * @format
 */

import { EMPTY_STATE_BG } from "../../utils/constants"
import { useAppContext } from "../../utils/state/appContext"
import { ERROR } from "../../utils/types"
import Button from "../button"

const ErrorState = () => {
	const { error } = useAppContext()
	const errorObj = error as ERROR

	return (
		<div className="grid grid-cols-1 w-full h-full items-center justify-center">
			<div className="grid justify-center">
				<img
					className="mx-auto"
					style={{ width: "400px", height: "200px" }}
					src={EMPTY_STATE_BG}
					alt="no results to show"
				/>
				<p className="text-lg font-bold text-center text-white">
					{errorObj.message || "Oops, there was an error"}
				</p>
				<Button
					type={"button"}
					onClick={() => window.location.reload()}
					className="uppercase mt-4 p-3 rounded text-md text-center text-white bg-red-500"
					icon={undefined}
					hoverIcon={undefined}
					iconPosition={"left"}
					text={"reload the page"}
					disabled={false}
				/>
			</div>
		</div>
	)
}

export default ErrorState
