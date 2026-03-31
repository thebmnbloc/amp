import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amp: {
          dark: "#0a0a0a",
          gold: "#fbbf24",
          "gold-dark": "#d97706",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;