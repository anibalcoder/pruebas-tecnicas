/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-250': 'repeat(auto-fit, 250px)',
        'auto-fit-200': 'repeat(auto-fit, 200px)'
      },
      width: {
        min: 'min(90%, 1200px)'
      }
    }
  },
  plugins: []
}
