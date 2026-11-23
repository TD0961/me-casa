import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#263F35",
          dark: "#192D26",
          light: "#345548",
          subtle: "#1c322b",
        },
        cream: {
          DEFAULT: "#F8F6F1",
          muted: "#F0ECE1",
          card: "#FFFFFF",
        },
        sand: {
          DEFAULT: "#E8DFD0",
          light: "#F4EFE6",
          dark: "#D6C7B2",
        },
        clay: {
          DEFAULT: "#B78D67",
          dark: "#966E4B",
          light: "#CDA482",
        },
        charcoal: {
          DEFAULT: "#333532",
          muted: "#5B5E59",
          soft: "#7E817C",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "DM Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
