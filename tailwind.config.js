module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#root',
  theme: {
    extend: {
      colors : {
        palette0 : {
          0: "#000000",
          1 : "#FFFFFF",
          2 : "blue" , 
          3 : "red" , 
          4 : "yellow" , 
          5 : "green"
        } 
      }
    },
  },
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
};