module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "tablet": "768px",
      "desktop":"1248px"
    },
    colors: {
      "primary-pink": "var(--primary-ping)",
      "primary-white": "var(--primary-white)",
      "blue": "var(--blue)",
      "light-blue": "var(--light-blue)",
      "mirage-blue": "var(--mirage-blue)",
      "charm-pink": "var(--charm-pink)",
      "white": "#fff",
      "gray": "var(--gray)"
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
