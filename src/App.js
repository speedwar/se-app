import React from 'react'
import { SeHome } from 'components/pages'
import { ThemeProvider } from 'components/context/ThemeContext'
import { Base } from 'components/styles'
import { themeMain } from 'components/styles'

// styled theming via useContext React hook
const App = () => {
  return (
    <ThemeProvider value={ themeMain.light }>
      <Base />
      <SeHome />
    </ThemeProvider>
  )
}

export default App
