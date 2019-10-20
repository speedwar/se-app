import React from 'react'
import { theme } from 'components/styles'

const ThemeContext = React.createContext({
  theme: theme.light,
  toggleTheme: () => {},
})

export default ThemeContext
