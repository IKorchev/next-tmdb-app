module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    boxShadow: {
      "2xl": "0 0 15px rgba(0, 0, 0, 0.3)",
    },
    fontFamily: {
      notosans: ["Noto\\ Sans", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {
      transform: ["hover"],
      textColor: ["active"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
