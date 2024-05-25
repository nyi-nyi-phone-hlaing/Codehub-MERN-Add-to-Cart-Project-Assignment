/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "calc-100vh-minus-2rem": "calc(100vh - 2rem)",
        "calc-100vh-minus-3rem": "calc(100vh - 3rem)",
        "calc-100vh-minus-4rem": "calc(100vh - 4rem)",
        "calc-full-minus-6.5rem": "calc(100% - 6.5rem)",
        "calc-full-minus-7.5rem": "calc(100% - 7.5rem)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      lineBreak: {
        anywhere: "anywhere",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".line-break-anywhere": {
            "line-break": "anywhere",
          },
          ".hyphens-auto-custom": {
            hyphens: "auto",
            "-ms-hyphens": "auto",
            "-webkit-hyphens": "auto",
            "-moz-hyphens": "auto",
          },
        },
        ["responsive"]
      );
    },
  ],
};
