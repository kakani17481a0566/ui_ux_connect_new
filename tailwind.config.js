/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00677d",
        "primary-container": "#00b4d8",
        "on-primary": "#ffffff",
        "on-primary-container": "#00414f",
        "primary-fixed-dim": "#4cd6fb",
        secondary: "#006877",
        "secondary-container": "#8debff",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#006b7a",
        tertiary: "#2c6480",
        "tertiary-container": "#77accb",
        background: "#faf8ff",
        "on-background": "#131b2e",
        surface: "#faf8ff",
        "on-surface": "#131b2e",
        "on-surface-variant": "#3d494d",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f3ff",
        "surface-container": "#eaedff",
        "surface-container-high": "#e2e7ff",
        "surface-container-highest": "#dae2fd",
        outline: "#6d797e",
        "outline-variant": "#bcc9ce",
        error: "#ba1a1a",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        manrope: ["'Manrope'", "sans-serif"],
      }
    },
  },
  plugins: [],
}
