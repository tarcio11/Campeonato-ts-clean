import { createGlobalStyle } from 'styled-components'

export const colorBackground = '#F0F0F7'
export const colorPrimaryLighter = '#9871F5'

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, html, #main {
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  #main {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button, textarea {
    font: 500 1.6rem Roboto;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`
