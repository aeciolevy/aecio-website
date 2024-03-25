import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["var(--font-grotesk)", "sans-serif"],
        "serif": ["var(--font-cormorant)", "serif"],
      },
      colors: {
        "primary": {
          "500": "#F17F21",
          "900": "#6D3609",
        },
        "secondary": {
          "200": "#E5E7EB",
          "300": "#1C2035",
          "400": "#14192E",
          "500": "#0C0E19",
          "600": "#080A12",
          "700": "#040609",
        },
        blue: {
          1050: '#151723',
        }

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

