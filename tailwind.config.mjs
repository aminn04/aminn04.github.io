/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        nav: ["Lobster", "cursive"],
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
          // Salish Sea blues
          sea: {
            50: "#eef4f7",
            100: "#d4e4ec",
            200: "#b4c9d4",
            300: "#8fb8c8",
            400: "#5a9ab3",
            500: "#3d7a94",
            600: "#2d5f75",
            700: "#1a3a4a",
            800: "#0f2027",
            900: "#071a1f",
            950: "#040d10",
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
