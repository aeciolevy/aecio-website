import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./app/**/*.{js,ts,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        fira: ["var(--font-fira)"],
        dancing: ["var(--font-dancing)"],
      },
      colors: {
        primary: {
          "500": "#F17F21",
          "900": "#6D3609",
        },
        secondary: {
          "200": "#E5E7EB",
          "300": "#1C2035",
          "400": "#14192E",
          "500": "#0C0E19",
          "600": "#080A12",
          "700": "#05070C",
        },
        blue: {
          1050: "151723",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

