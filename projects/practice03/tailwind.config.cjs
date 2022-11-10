/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue: {
          100: '#AFC2D4',
          300: '#3294F8',
          500: '#7B96B2',
          600: '#3A536B',
          700: '#1C2F41',
          800: '#112131',
          900: '#1C2F41',
        },
        Gray: {
          100: '#E7EDF4',
          200: '#C4D4E3',
          600: '#112131',
          700: '#0B1B2B',
          800: '#071422',
          900: '#040F1A',
        }
      }
  },
  plugins: [],
}
