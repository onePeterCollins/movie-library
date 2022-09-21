/**
 * Header
 *
 * @format
 */

import Link from "next/link"
import { LOGO_WHATS_IN } from "../../utils/constants"

const Header = () => {
	return (
		<header className="grid col-span-full">
			<div className="grid grid-flow-col justify-start py-5">
				<Link href="/">
					<a className="flex items-center">
						<img src={LOGO_WHATS_IN} alt="play icon" />
					</a>
				</Link>
			</div>
		</header>
	)
}

export default Header
