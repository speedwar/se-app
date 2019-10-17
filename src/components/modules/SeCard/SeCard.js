import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeContext } from 'components/context'
import { styles } from './SeCard.style'

const SeCard = ({ imgLogo, imgTile, title, href }) => {
  const theme = useContext(ThemeContext)

  const Card = styled.div`
    ${styles.card}
  `

  const CardClickable = styled.a``

  const CardProgramImage = styled.img`
    width: 100%;
  `

  const CardContent = styled.div`
    ${styles.cardContent}
  `

  const CardContentImg = styled.img`
    ${styles.cardContentImg}
  `

  const CardContentTitle = styled.p`
    color: ${theme.white}
    font-size: 16px;
    font-weight: 700;
  `

  return (
    <Card>
      <CardClickable
        href={ href }
        aria-label={`Navigate to ${title} page`}
      >
        <CardProgramImage
          src={ imgTile }
          alt="Card image"
        />
        <CardContent>
          <CardContentImg
            src={ imgLogo }
            alt="Seven logo"
          />
          <CardContentTitle>
            { title }
          </CardContentTitle>
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
