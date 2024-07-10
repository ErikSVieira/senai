/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
      colors: {
        'senai-100': '#EDF9FE',
        'senai-300': '#D6EADF',
        'senai-400': '#1274CE',
        'senai-500': '#2555AB',
        'senai-600': '#1C32BB',
        'senai-700': '#5B6069',

      },
      container: {
        center: true,
      },
      maxWidth: {
        'senai-full': '1920px',
        'senai-1': '1440px',
        'senai-2': '361px',
      },
      width: {
        'senai-full': '1920px',
        'senai-1': '1440px',
        'senai-2': '361px',
      },
      height: {
        'senai-full': '1920px',
        'senai-1': '1440px',
        'senai-2': '361px',
      },
      boxShadow: {
        'inner-white': 'inset 0 -150px 50px -5px rgba(255, 255, 255, 0.8)',
      },
    },
  },
  plugins: [],
}

