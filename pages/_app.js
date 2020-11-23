import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  h1 {
    color: #333333;
    font-size: 44px;
    line-height: 54px;
  }
`

const theme = {
  colors: {
    primary: '#2831ff',
    light1: '#FFFFFF',
    dark1: '#333333'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
