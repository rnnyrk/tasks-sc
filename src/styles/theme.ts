export const theme = {
  colors: {
    primary: '#6faef7',
    secondary: '#db6e2c',

    black: Object.assign('#222222', {
      off: '#333333',
    }),
    white: Object.assign('#ffffff', {
      background: '#fbfbfb',
    }),
  },

  fonts: {
    primary: "'Roboto', sans-serif",
  },

  theme: 'default',
} as const;
