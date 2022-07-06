/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // content: [],
  content: ["./node_modules/flowbite/**/*.js"],
  
  theme: {
    extend: {},
  },
  // plugins: [],
  plugins: [
    require('flowbite/plugin')
]


};
