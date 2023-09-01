/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      "cool-grey": "#8E8DA9",
      "cultured": "#F4F4F4",
      "dark-pink-2": "#B24564",
      "dark-pink": "#E64B77",
      "eerie-black": "#191919",
      "pastel-orange-2": "#E3A436",
      "pastel-orange": "#FFBA42",
      "platinum": "#DFDFEA",
      "space-cadet": "#221C5A",
      "space-cadet-2": "#23214C",
      "ufo-green-2": "#55B286",
      "ufo-green": "#32DB8A",
      "united-nations-blue": "#4C9EE7",
      "united-nations-blue-2": "#468AC7",
    },

    screens: {
      xs: "351px",
      sm: "641px",
      md: "926px",
      lg: "1021px",
      xl: "1271px",
    },

    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        PTSerif: ["PT Serif", "serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      backgroundPosition: {
        "center-top": "center top",
        "center-center": "center center",
      },
      transitionProperty: {
        'order-opacity': 'order, opacity',
      },
      transitionDuration: {
        '1200': '1200ms'
      }
    },
  },
  plugins: [],
};
