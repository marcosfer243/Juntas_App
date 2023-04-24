/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {

  plugins: [
    require('flowbite/plugin')
  ]

}

module.exports = {

  content: [
    "./node_modules/flowbite/**/*.js"
  ]

}
module.exports = {

  content: [
      // ...
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ]

}


