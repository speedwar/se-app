import React, { useContext } from 'react'
import styled from 'styled-components'
import { bp } from 'components/styles'
import { Container } from '@bootstrap-styled/v4'
import { ThemeContext } from 'context'
import { SeThemeToggler } from 'components/components'

const SeHeader = () => {
  const themeContext = useContext(ThemeContext)

  const Header = styled.header`
    background-color: ${themeContext.theme.header.background}
    font-size: 0.85rem;
    height: 4rem;
    display: flex;
    align-items: center;
  `

  const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${bp.greaterThan('xs')`
      justify-content: space-between;
    `};
  `

  const HeaderTitle = styled.h2`
    color: ${themeContext.theme.header.text};
    display: none;

    ${bp.greaterThan('xs')`
      display: block;
    `};
  `
  
  return (
    <Header>
      <Container fluid={true}>
        <HeaderContainer>
          <HeaderTitle>
            Styled-components app
          </HeaderTitle>
          <SeThemeToggler />
        </HeaderContainer>
      </Container>
    </Header>
  )
}

export default SeHeader
