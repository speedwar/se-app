import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'components/styles'
import { styles } from './SeCard.style'

const SeCard = ({ imgLogo, imgTile, title, href }) => {
  const Card = styled.div`
    ${styles.card}
    padding-right: .5em;
    padding-left: .5em;
    margin-bottom: 2.5em;
    width: 25%;
    display: inline-block;
  `

  const CardClickable = styled.a``

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
    ${styles.cardContent}
  `

  const CardContentImg = styled.img`
    ${styles.cardContentImg}
  `

  const CardContentTitle = styled.p`
    color: ${colors.white}
    font-size: 16px;
    font-weight: 700;
  `

  const CardImageResponsive = styled.div`
    padding-top: 56.25%;
    height: 0;
    position: relative;
  `

  return (
    <Card>
      <CardClickable
        href={ href }
        aria-label={`Navigate to ${title} page`}
      >
        <CardContent>
          <CardImageResponsive>
            <CardProgramImage
              src={ imgTile }
              alt="Card image"
            />
          </CardImageResponsive>
          <CardContentBottom>
            <CardContentImg
              src={ imgLogo }
              alt="Seven logo"
            />
            <CardContentTitle>
              { title }
            </CardContentTitle>
          </CardContentBottom>
        </CardContent>
      </CardClickable>
    </Card>
  )
}

SeCard.propTypes = {
  imgLogo: PropTypes.object.isRequired,
  imgTile: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
}

SeCard.defaultProps = {
  href: '#',
}

export default SeCard
