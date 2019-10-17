import React, { memo, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'components/context'
import { styles } from './SeCard.style'

const SeCard = ({ logo, image, title, href }) => {
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
        href={ href || '#' }
        aria-label={`Navigate to ${title} page`}
      >
        <CardProgramImage
          src={ image }
          alt="Card image"
        />
        <CardContent>
          <CardContentImg
            src={ logo }
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

export default memo(SeCard)
