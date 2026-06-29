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
        ink: "#090910",
        "ink-2": "#0f0f1a",
        "ink-3": "#14141f",
        "ink-4": "#1a1a28",
        brand: "#2d63d8",
        "brand-light": "#5b87ec",
        purple: "#8b5cf6",
        teal: "#14b8a6",
        green: "#10b981",
        red: "#ef4444",
        mute: "#9898b4",
        "mute-2": "#5e5e7a",
      },
      fontFamily: {
        sans: ["'Nunito Sans'", "sans-serif"],
        display: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
