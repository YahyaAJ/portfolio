/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Space Grotesk"],
        body: ["JetBrains Mono"],
        star: ['Twinkle Star'],
        caveat: ['caveat'],
        arabic: ['Scheherazade New']
      },
      colors: {
        'bgColor': '#20243D',
        'gradient1': 'rgb(76, 201, 240)',
        'gradient2': 'rgb(58, 12, 163)',
        'bgSky1' : '#111425',
        'bgSky2' : '#3751e0',
        'bgColor2': '#010615',
        'blck': "#252525"
      }
    },
  },
  plugins: [],
};
