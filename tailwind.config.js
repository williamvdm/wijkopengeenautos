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
        illusion:'#FFF3F6',
        wepeep:'#FFD3FC',
        remy:'#FFD3E8',
        havelockblue:'#FFABD3',
      },
    },
  },
  plugins: [],
};
