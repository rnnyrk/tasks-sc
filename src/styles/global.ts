import { createGlobalStyle } from 'styled-components';

import { theme } from '@styles/theme';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Light.ttf') format('truetype');
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Medium.ttf') format('truetype');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Bold.ttf') format('truetype');
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
    background: ${theme.colors.black.bg};
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.primary};
    height: 100%;
  }

  button {
    font-family: ${theme.fonts.primary};
  }
`;

export default GlobalStyle;
