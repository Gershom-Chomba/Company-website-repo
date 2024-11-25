/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark:"",
        light:"",
        accent:"",
        accentDark:"",
        gray:"",
      },
      backgroundImage: {
        bannerImg: "url('/construction.jpeg')",
        blackOverlay:"linear-gradient(to bottom, rgba(0,0,0) 0%, rgba(0,0,0,0,8) 100%)"
      },
      fontFamily:{
        mr:["var(--font-mr)"],
        in:["var(--font-in)"],
      }
    },
  },
  plugins: [],
};
