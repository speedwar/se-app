import React from 'react'
import PropTypes from 'prop-types'
import * as style from './SeCard.style'

const SeCard = ({ imgLogo, imgTile, title, href }) => {
  return (
    <style.Card>
      <style.CardClickable
        href={ href }
        aria-label={`Navigate to ${title} page`}
      >
        <style.CardContent>
          <style.CardImageResponsive>
            <style.CardProgramImage
              src={ imgTile }
              alt="Card image"
            />
          </style.CardImageResponsive>
          <style.CardContentBottom>
            <style.CardContentImg
              src={ imgLogo }
              alt="Seven logo"
            />
            <style.CardContentTitle>
              { title }
            </style.CardContentTitle>
          </style.CardContentBottom>
        </style.CardContent>
      </style.CardClickable>
    </style.Card>
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
