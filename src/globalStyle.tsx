import { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
     margin: 0;
   }

  html, body, #root {
    height: 100%;

  }
  html {
    --color-orange-100: hsl(26, 100%, 55%);
    --color-orange-200: hsl(25, 100%, 94%);
    --color-dark-blue-200: hsl(219, 9%, 45%);
    --color-dark-blue-100: hsl(220, 14%, 75%);
    --color-dark-blue-300: hsl(220, 13%, 13%);
    --color-dark-blue-50: hsl(223, 64%, 98%);
  }
`
