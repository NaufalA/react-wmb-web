const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#f9fafb",
        },
        foreground: {
          DEFAULT: "#1f2937",
        },
        accent: {
          DEFAULT: "#f3f4f6"
        },
        success: {
          DEFAULT: "#22c55e"
        },
        info: {
          DEFAULT: "#0ea5e9"
        },
        warning: {
          DEFAULT: "#fbbf24"
        },
        danger: {
          DEFAULT: "#dc2626"
        }
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.xl') },
      })
    })
  ],
}
