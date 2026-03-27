import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Kinetic Palette - Sovereign Brand Manual v1.2.0
      // n-Law 01: NEVER use raw hex. Always use these tokens.
      colors: {
        "action-gold":         "#FFD700",  // Primary Accent - Gold Indicator Node
        "electric-cyan":       "#00D2FF",  // Core Brand - Operational Signal
        "deep-navy-black":     "#010409",  // Canvas Foundation
        "institutional-white": "#FFFFFF",  // Typographic Base
        "success-green":       "#00A86B",  // Compliance / VAT OK
        "alert-red":           "#DC3545",  // VAT Error / Audit Flag
        "surface-dark":        "#0D1117",  // Card / Panel surface
        "border-subtle":       "#21262D",  // Subtle borders
      },
      fontFamily: {
        institutional: ["Neo Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;