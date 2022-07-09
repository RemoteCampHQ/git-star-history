module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { max: '768px', min: '100px' },
      md: { min: '768px' },
    },
    colors: {
      darkgreen: '#009FA1',
      lightgreen: '#E6F4F1',
      bgGrey: '#C4C4C4B3',
      bgBlack: '#4D5154',
      bearlyWhite: '#F8F9FA',
      bdline: '#dae6f3',
      bgHover: '#E6F4F1',
    },
    fontFamily: {
      serif: 'Noto Serif',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
