/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      dropShadow:{
        'font':'1px 1px 5px #a8a8a8',
      }
    },
  },
  plugins: [],
}

