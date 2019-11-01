import React from 'react'
import { theme } from 'styles'

const ThemeContext = React.createContext({
  theme: theme.light,
  toggleTheme: () => {},
})

export default ThemeContext
