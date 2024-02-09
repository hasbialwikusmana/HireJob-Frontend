/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#5E50A1",
        secondary: "#46505C",
        hoverPrimary: "#473c7a",
        hoverSecondary: "#9EA0A5",
        backgroundMain: "#F6F7F8",
        backgroundSecondary: "#E2E5ED",
        textMain: "#1F2A36",
        textSecondary: "#9EA0A5",
        light: "#FFFFFF",
        accent: "#FBB017",
        hoverAccent: "#f4a504",
      },
      backgroundColor: {
        scroll: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
