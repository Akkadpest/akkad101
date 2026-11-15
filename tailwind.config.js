module.exports = {
  content: ["./Components/BookingForm/**/*.{js,jsx}"],
  prefix: 'akdbw-',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: { sans: ['Manrope', 'sans-serif'] },
      colors: {
        pale_green: '#ABC27E',
        green: '#6bb544',
        light_green: 'rgba(109, 223, 69, 0.20)',
        border_gray: '#ced4da',
        light_gray: '#F5F5F5',
        dark_gray: '#515151',
        yellow: 'rgb(255, 160, 1)',
        semi_transp_black: 'rgba(0, 0, 0, 0.3)',
        blue: '#155BE4'
      }
    }
  },
  plugins: []
}
