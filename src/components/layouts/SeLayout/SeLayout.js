import React from 'react'
import styled from 'styled-components'
import { SeHeader, SeFooter } from 'components/layouts'
import { Container } from '@bootstrap-styled/v4'

const MainContainer = styled.main``

const SeLayout = ({children}) => (
  <>
    <SeHeader />
    <MainContainer>
      <Container fluid={true} className="py-2">
        {children}
      </Container>
    </MainContainer>
    <SeFooter />
  </>
);

export default SeLayout;
