import { nextui } from "@nextui-org/react";
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
        "linear-gradient-hover": "linear-gradient(180deg, #0075FF 0%, #00A3FF 100%);",
        "link-linear-gradient": "linear-gradient(180deg, #FF00D6 99.99%, #FF00D6 100%)",

        homeHeroBg: "url('/bg_images/home_hero-bg-2.png')",
        servicesHeroBg: " url('/bg_images/services_hero-bg.png')",

        companyInovationBg: "url('/company_innovation.png')",
        weDoSectionBg: 'url("/bg_images/what_we_do-bg.png")',
        careersContactUsBg: "url('/careers_2.png')",
      },
      boxShadow: {
        "3xl": "0px 4px 50px 0px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        "fade-in": "fade-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) both",
        "fade-out": "fade-out 0.5s cubic-bezier(0.4, 0, 0.2, 1) both",
        "spin-slower": "spin 35s ease infinite",
        "spin-faster": "spin 25s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), nextui()],
  darkMode: "class",
};
export default config;
