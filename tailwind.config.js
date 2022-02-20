module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      transparent: "#FFFFFF", 
      white: "#FAFAFA",
      dark: "#171823",
      black: "#25273D",
      blue: "#3A7CFD",
      "low-grayish": "#E3E4F1",
      "grayish": "#C8CBE7",
      "grayish-dark": "#5B5E7E",
      "low-gray": "#D1D2DA",
      gray: "#9495A5",
      "dark-gray": "#494C6B",
      "black-gray": "#4D5067",
      "black-grayish": "#767992",
      "low-black": "#393A4B",
    },
    extend: {
      backgroundImage: {
        'dark-mobile': "url('/src/assets/bg-mobile-dark.webp')",
        'light-mobile': "url('/src/assets/bg-mobile-light.webp')",
        'dark-desktop': "url('/src/assets/bg-desktop-dark.webp')",
        'light-desktop': "url('/src/assets/bg-desktop-light.webp')",
        'gradient': "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)",
      },
      boxShadow: {
        "light":"0px 35px 50px -15px rgba(194, 195, 214, 0.5)",
        "dark": "0px 35px 50px -15px rgba(0, 0, 0, 0.5);"
      }
    },
    maxWidth: {
      'custom': '541px',
    }      
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}