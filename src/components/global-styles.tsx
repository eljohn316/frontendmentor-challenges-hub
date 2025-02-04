import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */  

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  p {
    text-wrap: pretty;
  }

  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  #root {
    isolation: isolate;
  }

  @font-face {
    font-family: 'Josefin Sans';
    src: url('/fonts/JosefinSans-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Josefin Sans';
    src: url('/fonts/JosefinSans-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  /* Global Styles */

  :root {
    --clr-primary: hsl(220, 98%, 61%);

    --clr-background: hsl(0, 0%, 98%);
    --clr-background-card: hsl(0, 0%, 100%);
    --clr-text: hsl(235, 19%, 35%);
    --clr-placeholder-text:  hsl(236, 9%, 61%);
    --clr-text-done: hsl(233, 11%, 84%);
    --clr-border: hsl(236, 33%, 92%);
    --clr-action: hsl(236, 9%, 61%);
    --clr-action-hover: hsl(235, 19%, 35%);
  }
  
  :root[data-theme='dark'] {
    --clr-background: hsl(235, 21%, 11%);
    --clr-background-card: hsl(235, 24%, 19%);
    --clr-text: hsl(234, 39%, 85%);
    --clr-placeholder-text:   hsl(234, 11%, 52%);
    --clr-text-done: hsl(233, 14%, 35%);
    --clr-border: hsl(237, 14%, 26%);
    --clr-action: hsl(233, 14%, 35%);
    --clr-action-hover: hsl(236, 33%, 92%);
  }

  body {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.125rem;
    background-color: var(--clr-background);
  }
`;

export default GlobalStyles;
