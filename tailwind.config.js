/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          'moderate-blue': 'hsl(238, 40%, 52%)',
          'soft-red': 'hsl(358, 79%, 66%)',
          'light-gray-blue': 'hsl(239, 57%, 85%)',
          'pale-red': 'hsl(357, 100%, 86%)'
        },
        neutral: {
          'dark-blue': 'hsl(212, 24%, 26%)',
          'gray-blue': 'hsl(211, 10%, 45%)',
          'light-gray-2': 'hsl(223, 19%, 93%)',
          'light-gray-1': 'hsl(228, 33%, 97%)'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
