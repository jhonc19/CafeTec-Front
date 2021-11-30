module.exports = {
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'banner-1': "url('./assets/img/banner/banner1.jpg')",
      },
      colors: {
        coffe: {
          200: '#E3CAAB',
          300: '#C0A078',
          400: '#9E7C4F',
          500: '#A17C4F',
          600: '#835E30',
          700: '#634016',
          800: '#412605',
          900: '#2D1902'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
