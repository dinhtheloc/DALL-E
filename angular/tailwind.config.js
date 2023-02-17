/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      width: {
        '112': '28rem',
        '120': '30rem',
        '128': '32rem'
      },
      margin: {
        '112': '28rem',
        '120': '30rem',
        '128': '32rem'
      }
    },
  },
  plugins: [],
}
