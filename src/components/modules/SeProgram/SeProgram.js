import React, { useContext}  from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SeCard } from 'components/components'
import { ThemeContext } from 'context'

import imgTile from 'assets/images/tile.jpg'
import imgLogo from 'assets/images/logo.png'

const SeProgram = ({ title }) => {
  const themeContext = useContext(ThemeContext)

  const mockData = {
    data: {
      programs: [
        {
          id: 0,
          title: 'Home and Away',
          provider: 'Seven',
          image: imgTile,
          logo: imgLogo,
        }
      ]
    }
  }

  // Duplicating a program multiple times for DEMO
  let programList = [...mockData.data.programs]
  let loopNumber = 6;
  while(--loopNumber) {
    programList.push(...mockData.data.programs)
  }

  const SeProgramTitle = styled.h2`
    color: ${themeContext.theme.main.text};
    font-size: 1.25rem;
  `
  return (
    <SeProgramContainer>
      <SeProgramTitle>
        { title }
      </SeProgramTitle>
      <SeProgramContent>
        {programList.map((program, i) => (
          <SeCard
            key={ program.title + i }
            title={ program.title }
            provider= { program.provider }
            imgTile={ program.image }
            imgLogo={ program.logo }
          />
        ))}
      </SeProgramContent>
    </SeProgramContainer>
  )
}

SeProgram.propTypes = {
  imgLogo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  imgTile: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  title: PropTypes.string.isRequired,
  provider: PropTypes.string,
}

export default SeProgram

const SeProgramContainer = styled.section``

const SeProgramContent = styled.div`
  margin-right: -0.5em;
  margin-left: -0.5em;
`
