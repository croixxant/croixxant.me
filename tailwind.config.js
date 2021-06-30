const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        orange: '#FA742B',
        twitter: '#1DA1F2',
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.white'),
            'h2,h3,h4': {
              color: theme('colors.white'),
            },
            a: {
              color: theme('colors.green.500'),
            },
          },
        },
        DEFAULT: {
          css: {
            'p > code::before, p > code::after': {
              content: 'none',
            },
            'ul[class="contains-task-list"] > li::before': {
              content: 'none',
            },
            'ul[class="contains-task-list"] > li': {
              paddingLeft: 0,
            },
            '> ul[class="contains-task-list"] > li > *:first-of-type': {
              marginTop: 0,
            },
            '> ul[class="contains-task-list"] > li > *:last-of-type': {
              marginBottom: 0,
            },
            '> ul[class="contains-task-list"] > li > input[type="checkbox"]': {
              marginRight: '0.5rem',
            },
            img: {
              width: '100%',
              borderRadius: '0.5rem',
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}
