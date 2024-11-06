import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DarkGreen: "#013220",
          White: "#FFFFFF",
          LightGreen: "#809990",
          Black: "#191919",
          Stone: "#D9D9D9",
        },
      },

      backgroundImage: {
        blackBackground: "url('/images/black-concrete-wall.jpg')",
        greenBackground: "url('/images/old-green-paper.jpg')",
        whiteBackground: "url('/images/watercolor-paper-texture.jpg')",
        imageBg : "url('/images/hero.jpg')",
      },

      fontFamily: {
        ZonaPro: ["ZonaPro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
