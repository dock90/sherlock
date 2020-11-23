import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: 'hsl(237, 100%, 58%)',
    light1: '#FFFFFF',
    dark1: '#333333',
    dark2: '#494949'
  },
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  h1 {
    color: ${theme.colors.dark1};
    font-size: 44px;
  }

  h2 {
    color: ${theme.colors.dark2};
  }
`

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
