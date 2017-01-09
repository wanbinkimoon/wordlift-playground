import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    min-height: 100vh;
    width: 100%;
    background-color: #f5f5f5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    width: 100%;
    min-height: 100vh;
    background-color: #f5f5f5;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
