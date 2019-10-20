import React, { useContext } from 'react'
import { SeHeader, SeFooter } from 'components/layouts'
import { Container } from '@bootstrap-styled/v4'
import { ThemeContext } from 'context'
import styled from 'styled-components'

const SeLayout = ({children}) => {
  const themeContext = useContext(ThemeContext)

  const AppContainer = styled.div`
    background-color: ${themeContext.theme.main.background};
    height: 100%;
  `

  return (
    <AppContainer>
      <SeHeader />
      <main>
        <Container fluid={true}>
          {children}
        </Container>
      </main>
      <SeFooter />
    </AppContainer>
  )
}

export default SeLayout
