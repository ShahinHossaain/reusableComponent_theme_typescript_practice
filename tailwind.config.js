/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      shahin: '900px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      primary: {
        400: 'rgb(var(--color-primary-400) / <alpha-value>)',
        500: 'rgb(var(--color-primary-500) / <alpha-value>)',
        DEFAULT: 'rgb(var(--color-primary-400) / <alpha-value>)'
      },
      white: 'rgb(var(--color-white) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary-) / <alpha-value>)'


    },

  },
  darkMode: "class",
  plugins: []
}