/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Hanken Grotesk"', "sans-serif"],
				nav: ["Lobster", "cursive"],
				mono: ['"IBM Plex Mono"', "monospace"],
			},
			fontSize: {
				xs: ["15px", "1.5"],
				sm: ["17px", "1.5"],
				base: ["19px", "1.6"],
				lg: ["21px", "1.6"],
				xl: ["28px", "1.5"],
				"2xl": ["34px", "1.4"],
				"3xl": ["40px", "1.3"],
				"4xl": ["50px", "1.2"],
				"5xl": ["62px", "1.1"],
				"6xl": ["78px", "1.1"],
			},
			fontWeight: {
				normal: "500",
				medium: "600",
				semibold: "700",
				bold: "900",
			},
			colors: {
				// Pacific Northwest palette
				pnw: {
					// Deep blue palette (matching nav accent #3b7dd8)
					sea: {
						50: "#f0f4fc",
						100: "#dce5f8",
						200: "#bccef2",
						300: "#93b1e8",
						400: "#6590dc",
						500: "#3b7dd8",
						600: "#2c63b4",
						700: "#1f4a8a",
						800: "#152f5c",
						900: "#0d1d3a",
						950: "#070f1f",
					},
					// Forest greens
					forest: {
						50: "#f0f5f1",
						100: "#d8e5db",
						200: "#b5cebb",
						300: "#8ab394",
						400: "#5d9468",
						500: "#3d7548",
						600: "#2d5a37",
						700: "#1e3d25",
						800: "#142a1a",
						900: "#0a1a0f",
						950: "#050d07",
					},
					// Mountain stone grays
					stone: {
						50: "#f5f6f7",
						100: "#e5e7ea",
						200: "#ccd0d5",
						300: "#a8aeb6",
						400: "#7d8590",
						500: "#5f6673",
						600: "#4a505a",
						700: "#3a3f47",
						800: "#282c31",
						900: "#1a1c1f",
						950: "#0d0e10",
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
