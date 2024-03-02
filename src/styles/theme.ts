export const theme = {
  colors: {
    primary: Object.assign('#6faef7', {
      off: '#c7e1ff',
    }),
    secondary: Object.assign('#db6e2c', {
      off: '#ebb391',
    }),

    black: Object.assign('#0c0c0c', {
      off: '#04041b',
      bg: '#1a1a1a',
    }),
    gray: Object.assign('#a0a0a0', {
      off: '#e0e0e0',
    }),
    white: Object.assign('#ffffff', {
      bg: '#fbfbfb',
    }),
  },

  fonts: {
    primary: "'Roboto', sans-serif",
  },

  theme: 'default',
} as const;
