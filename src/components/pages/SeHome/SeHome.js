import React from 'react'
import styled from 'styled-components'
import { SeLayout } from 'components/layouts'
import { SeCard } from 'components/modules'
import { enau } from 'components/i18n'

import imgTile from 'assets/images/tile.jpg'
import imgLogo from 'assets/images/logo.png'

const CardContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = () => (
  <>
    <CardContainer>
      <SeCard
        imgLogo={ imgTile }
        imgTile={ imgLogo }
        title={ enau.programs.homeandaway.title }
      />
    </CardContainer>
  </>
)

const SeHome = () => (
  <SeLayout>
    <Content />
  </SeLayout>
)

export default SeHome
