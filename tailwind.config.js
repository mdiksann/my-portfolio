/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono", "Consolas", "Monaco", "monospace"],
        mono: ["Space Mono", "Consolas", "Monaco", "monospace"],
      },
    },
  },
  plugins: [],
};
