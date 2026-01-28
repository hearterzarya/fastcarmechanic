import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium UAE Automotive Brand Palette
        charcoal: {
          DEFAULT: "#1a1a1a",
          50: "#2a2a2a",
          100: "#1f1f1f",
          200: "#1a1a1a",
          300: "#151515",
          400: "#0f0f0f",
        },
        silver: {
          DEFAULT: "#c0c0c0",
          50: "#f5f5f5",
          100: "#e8e8e8",
          200: "#d0d0d0",
          300: "#c0c0c0",
          400: "#a8a8a8",
        },
        amber: {
          DEFAULT: "#ff6b35",
          50: "#fff4f0",
          100: "#ffe0d6",
          200: "#ffc4b0",
          300: "#ffa085",
          400: "#ff6b35",
          500: "#ff4d1a",
          600: "#e63900",
        },
        cyan: {
          DEFAULT: "#00d9ff",
          50: "#e6f9ff",
          100: "#b3f0ff",
          200: "#80e7ff",
          300: "#4ddeff",
          400: "#00d9ff",
          500: "#00b8d9",
          600: "#0097b3",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.5rem",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Inter", "system-ui", "sans-serif"],
        condensed: ["var(--font-condensed)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "premium": "0 20px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        "glow-amber": "0 0 20px rgba(255, 107, 53, 0.4), 0 0 40px rgba(255, 107, 53, 0.2)",
        "glow-cyan": "0 0 20px rgba(0, 217, 255, 0.3), 0 0 40px rgba(0, 217, 255, 0.15)",
      },
      animation: {
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
