 /** @type {import('tailwindcss').Config} */
 export default {
  >   content: ["./src/**/*.{html,js}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }


    // tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        'sm': '640px',    // Small devices (default)
        'md': '768px',    // Medium devices (default)
        'lg': '1024px',   // Large devices (default)
        'xl': '1280px',   // Extra large devices (default)
        '2xl': '1536px',  // 2X large devices (default)
        '3xl': '1920px',  // Custom breakpoint
      },
    },
  },
};