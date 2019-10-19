import React from 'react'
import { SeCard } from 'components/components'
import { enau } from 'components/i18n'
import * as style from './SeProgram.style'

import imgTile from 'assets/images/tile.jpg'
import imgLogo from 'assets/images/logo.png'

const SeProgram = ({ title }) => (
  <style.SeProgramContainer>
    <style.SeProgramTitle>
      { title }
    </style.SeProgramTitle>
    <style.SeProgramContent>
      <SeCard
        imgLogo={ imgLogo }
        imgTile={ imgTile }
        title={ enau.programs.homeandaway.title }
      />
      <SeCard
        imgLogo={ imgLogo }
        imgTile={ imgTile }
        title={ enau.programs.homeandaway.title }
      />
      <SeCard
        imgLogo={ imgLogo }
        imgTile={ imgTile }
        title={ enau.programs.homeandaway.title }
      />
      <SeCard
        imgLogo={ imgLogo }
        imgTile={ imgTile }
        title={ enau.programs.homeandaway.title }
      />
      <SeCard
        imgLogo={ imgLogo }
        imgTile={ imgTile }
        title={ enau.programs.homeandaway.title }
      />
      <SeCard
        imgLogo={ imgLogo }
        imgTile={ imgTile }
        title={ enau.programs.homeandaway.title }
      />
    </style.SeProgramContent>
  </style.SeProgramContainer>
)

export default SeProgram
