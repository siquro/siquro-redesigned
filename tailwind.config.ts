import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

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
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
          sm: "15px",
          lg: "20px",
          xl: "5rem",
          "2xl": "5rem",
        },
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
        "card-hover-gradient": "linear-gradient(180deg, #00A3FF 0%, #0057FF 100%)",

        homeHeroBg: "url('/bg_images/home_hero-bg-2.png')",
        servicesHeroBg: " url('/bg_images/services_hero-bg.png')",
        companyHeroBg: "url('/bg_images/company_hero-bg.png')",
        solutionsHeroBg: "url('/bg_images/solution_hero-bg.png')",

        companyInovationBg: "url('/company_innovation.png')",
        weDoSectionBg: 'url("/bg_images/what_we_do-bg.png")',
        careersContactUsBg: "url('/careers_2.png')",
        servicesPaymentBg: "url('/bg_images/payment_bg.png')",
      },
      boxShadow: {
        "3xl": "0px 4px 50px 0px rgba(0, 0, 0, 0.25)",
        light: "0px 4px 50px 0px rgba(225, 225, 225, 0.25)",
      },
      keyframes: {
        orbit: {
          from: { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(100px) rotate(-360deg)" },
        },
        spin: {
          "100%": { transform: "rotate(360deg)" },
        },
        reversSpin: {
          "100%": { transform: "rotate(-360deg)" },
        },
        zoomIn: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.8)" },
        },
        moovingRightToLeft: {
          "0%, 100%": { left: "-15%" },
          "50%": { left: "10%" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            filter: "blur(2px)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
            filter: "blur(0px)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
            filter: "blur(2px)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
            filter: "blur(1px)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            filter: "blur(2px)",
          },
          "50%": {
            transform: "translate(20px, -20px) scale(1.1)",
            filter: "blur(0px)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
            filter: "blur(1px)",
          },
        },
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",

        // "fade-in": "fade-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) both",
        // "fade-out": "fade-out 0.5s cubic-bezier(0.4, 0, 0.2, 1) both",
        // "spin-faster": "spin 25s ease-in-out infinite",
        orbit: "orbit 8s linear infinite",
        blob: "blob 7s infinite",
        blob2: "blob2 10s infinite",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("@tailwindcss/forms"),
    nextui(),
    // @ts-ignore
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 15px",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1280px",
          },
          "@screen xl": {
            maxWidth: "1400px",
          },
        },
      });
    },
  ],
  darkMode: "class",
};
export default config;
