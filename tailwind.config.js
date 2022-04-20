module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Oswald",
      },

      backgroundImage: {
        "hero-pattern": "url('../public/assets/image 2.png')",
        "quote-pattern": "url('../public/assets/quotebackground.png')",
      },
      colors: {
        "blue-primary": "#3BA6DE",
        "green-primary": "#CADB2B",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
