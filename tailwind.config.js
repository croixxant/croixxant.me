module.exports = {
  theme: {
    extend: {
      typography: {
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
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
