/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			backgroundImage: {
				backdrop:
					"linear-gradient(to bottom, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5))",
				"logo-whats-in":
					"url(https://res.cloudinary.com/onepetercollins/image/upload/v1662023417/lifebit/2.Exports/2.Logos/logo_u738ge.svg)"
			}
		}
	},
	plugins: []
}
