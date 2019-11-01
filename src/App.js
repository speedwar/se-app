import React from 'react'
import { SeHome } from 'views'
import { ThemeContext } from 'context'
import { theme, Base } from 'styles'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === theme.dark ? theme.light : theme.dark,
      }))
    }

    this.state = {
      theme: theme.light,
      toggleTheme: this.toggleTheme,
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={ this.state }>
        <Base />
        <SeHome />
      </ThemeContext.Provider>
    )
  }
}
