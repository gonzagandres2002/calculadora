/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width:{
        '380':'380px',
        '400':'400px'
      },
      height: {
        '200':'200px',
        '260':'260px',
        '400':'400px'

      },
      translate:{
        '150':'150px',
        '41':'41px',
        '210':'210px',
        '301':'301px',
        '300':'50%',
        '350':'40%'

      }
    },
  },
  plugins: [],
};
