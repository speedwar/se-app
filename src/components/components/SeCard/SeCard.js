import React from 'react'
import PropTypes from 'prop-types'
import * as style from './SeCard.style'

const SeCard = ({ imgLogo, imgTile, title, provider, href }) => {
  return (
    <style.Card>
      <style.CardClickable
        href={ href }
        aria-label={`Click to watch ${title}`}
      >
        <style.CardContent>
          <style.CardImageResponsive>
            <style.CardProgramImage
              src={ imgTile }
              alt={ title } 
            />
          </style.CardImageResponsive>
          <style.CardContentBottom>
            <style.CardContentImg
              src={ imgLogo }
              alt={ provider}
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
