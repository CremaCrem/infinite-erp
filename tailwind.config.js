const { Montserrat } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'LightBlue' : '#3A506B',
        'NeonGreen' : '#53DD6C',
        'MediumBlue' : '#1C2541',
        'DarkBlue' : '#0B132B',
        'Goldy' : '#E1B07E',
      },
      fontFamily: {
        Montserrat: ['Montserrat'],
        Roboto: ['Roboto'],
        Lato: ['Lato'],
        Playfair: ['Playfair'],
      },
    },
  },
  plugins: [],
};
