/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
      display: ['group-hover'],
    },
  },
  plugins: [],
}