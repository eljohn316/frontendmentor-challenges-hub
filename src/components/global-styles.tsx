// @ts-ignore
import '@fontsource-variable/josefin-sans';
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

  /* Global Styles */

  body {
    font-family: 'Josefin Sans Variable', sans-serif;
    font-size: 1.125rem;
    background-color: hsl(0, 0%, 98%);
  }
`;

export default GlobalStyles;
/**
 --clr-bg-color: hsl(0, 0%, 98%);
 --clr-bg-color: hsl(235, 21%, 11%);
 

 --clr-primary: hsl(220, 98%, 61%);
 --clr-todo-done: hsl(236, 33%, 92%);
 */
