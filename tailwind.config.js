/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'sm': '640px',     // Small screens like smartphones
        'md': '768px',     // Medium screens like tablets
        'lg': '1024px',    // Large screens like laptops
        'xl': '1280px',    // Extra-large screens like desktops
        '2xl': '1536px',   // 2x extra-large screens
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};