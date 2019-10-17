import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeContext } from 'components/context'
import { styles } from './SeCard.style'

const SeCard = ({ imglogo, imgtile, title, href }) => {
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
          src={ imgtile }
          alt="Card image"
        />
        <CardContent>
          <CardContentImg
            src={ imglogo }
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
  imglogo: PropTypes.object,
  imgtile: PropTypes.object,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
}

SeCard.defaultProps = {
  imglogo: null,
  imgtile: null,
  href: '#',
}

export default SeCard
