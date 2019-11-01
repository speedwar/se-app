import React, { useContext } from 'react'
import { ThemeContext } from 'context'
import styled from 'styled-components'

const ThemeToggler = () => {
  const themeContext = useContext(ThemeContext)

  const ThemeTogglerButton = styled.button`
    background: transparent;
    border: 1px solid ${themeContext.theme.header.text};
    color: ${themeContext.theme.header.text};
    cursor: pointer;
    padding: 1.25rem 0.75rem;
    height: 2rem;
    line-height: 0;
  `

  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <ThemeTogglerButton
          onClick={ toggleTheme }
        >
          Toggle Theme
        </ThemeTogglerButton>
      )}
    </ThemeContext.Consumer>
  )
}

export default ThemeToggler
