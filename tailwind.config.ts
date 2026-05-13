import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        ink: "#151515",
        paper: "#f7f5f1",
        gold: "#d7b84c",
        royal: "#3454d1"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
