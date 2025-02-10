/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgcolor: 'var(--bg-color)',
        bgcolordim: 'var(--bg-color-dim)',
        bgimagecolor: 'var(--bg-image-color)',
      },
      dropShadow: {
        custom: '0 40px 40px rgba(89, 60, 73, 1)',
      }
    },
  },
  plugins: [],
}