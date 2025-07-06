// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This line is important
    "./public/index.html",
  ],
  // Define custom font families
  theme: {
    extend: {
      fontFamily: {
        // 'Inter' is used as the primary body font
        inter: ['Inter', 'sans-serif'],
        // 'Electrolize' is used for headers and prominent text
        electrolize: ['Electrolize', 'sans-serif'],
      },
      // You can extend other theme properties here if needed
      colors: {
        // Defining a custom color palette based on your website's theme
        // This allows you to use classes like text-neon-pink, bg-dark-purple, etc.
        'dark-purple': '#1A0A33',
        'medium-purple': '#2D1B4D',
        'light-purple': '#3D275A',
        'content-bg-purple': 'rgba(61, 39, 90, 0.92)', // For content containers
        'border-purple': '#5A3F80', // For borders
        'nav-bg-purple': 'rgba(26, 10, 51, 0.98)', // For fixed nav
        'neon-pink': '#FF00FF',
        'neon-cyan': '#00FFFF',
        'vibrant-orange': '#FF8C00',
        'bright-yellow': '#FFFF00',
        'text-light': '#E0D9ED', // Light text color
        'text-medium': '#C0B8D1', // Medium text color
        'text-footer': '#9A8FA8', // Footer text color
      },
    },
  },
  plugins: [],
}
