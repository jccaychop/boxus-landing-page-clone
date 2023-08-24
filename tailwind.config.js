/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      "dark-pink-2": "#B24564",
      "dark-pink": "#E64B77",
      "pastel-orange-2": "#E3A436",
      "pastel-orange": "#FFBA42",
      "platinum": "#DFDFEA",
      "space-cadet": "#221C5A",
      "ufo-green-2": "#55B286",
      "ufo-green": "#32DB8A",
      "united-nations-blue": "#4C9EE7",
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
