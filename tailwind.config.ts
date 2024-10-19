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
      aspectRatio: {
        "3/2": "3/2",
      },
      fontFamily: {
        fira: ["var(--font-fira)"],
        dancing: ["var(--font-dancing)"],
      },
      colors: {
        brand: {
          "background-blue": "#151723",
          secondary: {
            text: "#757985",
          },
        },
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
        blink: {
          '0%, 100%': { opacity: '1', color: 'currentColor' }, // Color blink
          '50%': { opacity: '0.5' }, // Half-transparent at the middle
        },
        fadeOut: {
          '0%': { opacity: '1' }, // Fully visible
          '100%': { opacity: '0' }, // Fully transparent
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'blink': 'blink 1s linear infinite', // Blink forever
        'blink-and-fade': 'blink 1s ease-in-out 3s, fadeOut 1s forwards 3s', // Blink for 3s, then fade out

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

