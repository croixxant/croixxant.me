module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: '#FA742B',
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.white'),
            'h2,h3,h4': {
              color: theme('colors.white'),
            },
          },
        },
        DEFAULT: {
          css: {
            'ul.contains-task-list > li::before': {
              content: 'none',
            },
            'ul.contains-task-list > li': {
              paddingLeft: 0,
            },
            '> ul.contains-task-list > li > *:first-child': {
              marginTop: 0,
            },
            '> ul.contains-task-list > li > *:last-child': {
              marginBottom: 0,
            },
            '> ul.contains-task-list > li > input[type="checkbox"]': {
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
