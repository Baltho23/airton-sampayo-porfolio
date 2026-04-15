/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,scss}'],
  important: true,
  theme: {
    extend: {
      colors: {
        primary:   '#522566',
        mid:       '#7A3A8E',
        accent:    '#AD74C3',
        soft:      '#EADFF0',
        lightest:  '#F8EDFB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
