/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      colors: {
        "baseColor":"#FCDC91",
        "darkColor":"#282828",
        "beigeColor":"#b7b7ac",
        "footerColor":"#f3f3f3",
      }
    },
  },
  plugins: [
      require('@tailwindcss/aspect-ratio','@tailwindcss/forms')
  ],
}

