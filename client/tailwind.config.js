/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      aspectRatio: {
        '3/5': '3 / 5' 
      }
    },
  },
  plugins: [],
}

