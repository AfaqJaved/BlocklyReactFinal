// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "toolbox-background": "url('/src/assets/images/toolbox-background.jpg')",
      },
      fontFamily: {
        FingerPaint: ["FingerPaint"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
