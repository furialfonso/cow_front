/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    colors: {
      primary: {
        950:"#082f49",
        800:"#075985",
      },
      secondary: '#e11d48',
      rose: {
        700: '#be123c',
      },
      stale: {
        800: '#1f2937',
      },
      body:'#ffffff',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {}
  },
  plugins: [],
}

