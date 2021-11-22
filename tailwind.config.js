// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        toolbox: {
          orange: "#ff5f1f",
        },
      },
      backgroundImage: {
        "toolbox-background": "url('/src/assets/images/toolbox-background.jpg')",
        login_back: "url('/src/assets/images/login.png')",
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
