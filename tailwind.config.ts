import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 900: "#12161c", "900_99": "#12161c99" },
        white: { A700: "#ffffff" },
        black: { 900: "#000000" },
        blue: { A200: "#3d8bff" },
        purple: { A700_01: "#ab23ff" },
      },
      boxShadow: {},
      backgroundImage: {
        gradient: "linear-gradient(90deg, #3d8bff,#ab23ff)",
        gradient1: "linear-gradient(180deg, #3c6eff,#9123ff)",
        gradient2: "linear-gradient(180deg, #3d8bff,#ab23ff)",
        gradient3: "linear-gradient(180deg, #000000,#00000000)",
        gradient4: "linear-gradient(180deg, #000000,#3d8bff,#ab23ff)",
        gradient5: "linear-gradient(180deg, #3d8bff70,#ab23ff)",
        gradient6: "linear-gradient(270deg, #000000,#00000000)",
      },
      fontFamily: { satoshi: "Satoshi", monumentextended: "Monument Extended" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require('@tailwindcss/typography')],
};
export default config;
