/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        'card': '250/363',
      },
    }
  },
  plugins: [
    require('tailwindcss-3d')
  ],
}

