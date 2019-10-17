import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { SeHome } from 'components/pages'
import { ThemeProvider } from 'components/context/ThemeContext'
import { themeMain } from 'components/styles'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: Helvetica, arial, sans-serif;
  }
`

// styled theming via useContext React hook
const App = () => {
  return (
    <ThemeProvider value={ themeMain.light }>
      <Normalize />
      <GlobalStyles />
      <SeHome />
    </ThemeProvider>
  )
}

export default App
