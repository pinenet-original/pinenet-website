/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsm: "390px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    typography: {
      article: {
        fontSize: "20px",
        lineHeight: "32px",
        color: "#000",
      },
    },
    fontSize: {
      sm: "12.8px",
      base: "16px",
      xl: "20px",
      "2xl": "25.008px",
      "3xl": "31.248px",
      "4xl": "39.056px",
      "5xl": "48.832px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-text": "#000",
      },
      padding: {
        "5px": "5px",
      },
    },
  },
  plugins: [],
};
