/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFC828",
        // blue: "#EAA317",
        secondary: "#FE645A",
        bam: "#98ACFF",
        brownish: "#F1EFE3",
        light: "#FFEAE3",
        lightYellow: "#CEB7B2",
        star: "#FFC828",
        money: "#10a666", 
      },
      backgroundColor: {
        "overlay-70": "rgba(0,0,0,0.7)",
      },
    },
  },
  plugins: [],
};
