import React from 'react'
import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

//

const GlobalStyles = createGlobalStyle`
  ${normalize};
  html, body, body, [data-reactroot] {
    min-height: 100%;
    max-width: 100%;
  }

  html, body {
    width: 100%;
    font-size: 16px;
    font-family: "Helvetica", "Georgia", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  input {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default MyApp
