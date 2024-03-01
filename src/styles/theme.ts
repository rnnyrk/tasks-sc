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
      bg: '#303030',
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
