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
        // newBee design system
        bg: {
          DEFAULT: "#080808",
          secondary: "#111111",
          card: "#141414",
        },
        cream: {
          DEFAULT: "#F2F0EB",
          muted: "#B8B4AB",
          dim: "#6B6762",
        },
        honey: {
          DEFAULT: "#F5C518",
          light: "#FFD84D",
          dark: "#D4A800",
        },
        ember: {
          DEFAULT: "#FF4D00",
          light: "#FF6B2B",
        },
        // Neutral grays
        surface: {
          100: "#1A1A1A",
          200: "#242424",
          300: "#2E2E2E",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      fontSize: {
        "fluid-sm": "clamp(0.875rem, 1.5vw, 1rem)",
        "fluid-base": "clamp(1rem, 2vw, 1.25rem)",
        "fluid-lg": "clamp(1.25rem, 3vw, 2rem)",
        "fluid-xl": "clamp(2rem, 5vw, 4rem)",
        "fluid-2xl": "clamp(3rem, 8vw, 7rem)",
        "fluid-3xl": "clamp(4rem, 12vw, 12rem)",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        "display-tight": "-0.02em",
      },
      lineHeight: {
        "display": "0.95",
        "tight-display": "1.05",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "expo-in-out": "cubic-bezier(0.87, 0, 0.13, 1)",
        "spring": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      animationDuration: {
        "2000": "2000ms",
        "3000": "3000ms",
      },
      gridTemplateColumns: {
        "24": "repeat(24, minmax(0, 1fr))",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
    },
  },
  plugins: [],
};

export default config;
