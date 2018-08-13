import {injectGlobal} from 'styled-components'

injectGlobal`
  *, *::before, *::after {
    box-sizing: inherit;
  }

  html,
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    font-color: #333;
  }
`