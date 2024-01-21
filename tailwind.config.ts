import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        kodchasan: ["var(--font-kodchasan)"],
      },
      colors: {
        primaryLight: "#FFFFFF",
        primaryDark: "#000000",
        secondary: "#323232",

        accent1: "#FF00D6",
        accent2: "#00FFF0",
        accent3: "#00A3FF",
        accent4: "#3D6ECE",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fade-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) both",
        "fade-out": "fade-out 0.5s cubic-bezier(0.4, 0, 0.2, 1) both",
        "spin-slower": "spin 35s ease infinite",
        "spin-faster": "spin 25s ease-in-out infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
