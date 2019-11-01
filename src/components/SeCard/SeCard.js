import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { bp, colors } from 'styles'

const SeCard = ({ imgLogo, imgTile, title, provider, href }) => (
  <Card>
    <CardContainer
      href={ href }
      aria-label={`Click to watch ${title}`}
    >
      <CardContent>
        <CardImageResponsive>
          <CardProgramImage
            src={ imgTile }
            alt={ title }
          />
        </CardImageResponsive>
        <CardContentBottom>
          <CardContentImg
            src={ imgLogo }
            alt={ provider}
          />
          <CardContentTitle>
            { title }
          </CardContentTitle>
        </CardContentBottom>
      </CardContent>
    </CardContainer>
  </Card>
)


SeCard.propTypes = {
  imgLogo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  imgTile: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  title: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  href: PropTypes.string,
}

SeCard.defaultProps = {
  href: '#',
}

export default SeCard

const Card = styled.div`
  display: inline-block;
  position: relative;
  padding-right: .5em;
  padding-left: .5em;
  margin-bottom: 2.5em;
  width: 100%;

  ${bp.greaterThan('xs')`
    width: 50%;
  `};

  ${bp.greaterThan('sm')`
    width: 33.33%;
  `}

  ${bp.greaterThan('md')`
    width: 25%;
  `}

  ${bp.greaterThan('lg')`
    width: 340px;
  `}
`

const CardContainer = styled.a``

const CardProgramImage = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`

const CardContent = styled.div`
  position: relative;
`

const CardContentBottom = styled.div`
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);
  height: 55px;
  padding: 0 6px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
`

const CardContentImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 6px;
`

const CardContentTitle = styled.p`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 700;
`

const CardImageResponsive = styled.div`
  padding-top: 56.25%;
  height: 0;
  position: relative;
`
