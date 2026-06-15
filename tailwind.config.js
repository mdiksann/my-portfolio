/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono", "Consolas", "Monaco", "monospace"],
        mono: ["Space Mono", "Consolas", "Monaco", "monospace"],
      },
      colors: {
        // Tokyo Night palette
        tn: {
          bg: "#0a0e14", // deep navy-black (app background)
          surface: "#161b22", // panel / editor body
          elevated: "#1a1f2e", // raised surface (tab bar, status bar)
          border: "#283044", // muted slate border
          accent: "#7aa2f7", // primary cyan-blue
          teal: "#2dd4bf", // secondary emerald/teal
          violet: "#bb9af7", // highlight / CTA
          string: "#9ece6a", // JSON string (green)
          number: "#ff9e64", // JSON number (orange/amber)
          keyword: "#7dcfff", // JSON key / keyword (cyan)
          boolean: "#f7768e", // JSON boolean / null (red)
          text: "#c0caf5", // primary text (soft white)
          muted: "#565f89", // muted gray text
        },
      },
    },
  },
  plugins: [],
};
