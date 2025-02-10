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
      spacing: {
        paddingX: '2.5rem',
        paddingY: '2.5rem',
      },
      dropShadow: {
        custom: '0 30px 20px rgba(89, 60, 73, 0.6)',  
      }
    },
  },
  plugins: [],
}