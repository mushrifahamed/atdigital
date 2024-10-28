/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bluish-purple": "#6B3CC9",
        "yuzu-jam": "#F28D35",
        "ice-ice-baby": "#6A44F2",
        "rich-blue": "#1CBDDD",
        "electric-indigo": "#52378C",
        "interstellar-bluelight": "#78BF91",
        "interstellar-blue": "#4DCA79",
        "tricorn-black": "#2F2F2F",
        "acier-gray": "#545A75",
        acier: "#9C9991",
        "wizard-white": "#E2F2FE",
        "cuddly-yarn": "#FFF8E0",
        "hornet-sting": "#FF0335",
        frog: "#5EB30B",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};