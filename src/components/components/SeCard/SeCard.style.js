import { bp } from 'components/styles'
import styled from 'styled-components'
import { colors } from 'components/styles'

export const Card = styled.div`
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

export const CardClickable = styled.a``

export const CardProgramImage = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`

export const CardContent = styled.div`
  position: relative;
`

export const CardContentBottom = styled.div`
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

export const CardContentImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 6px;
`

export const CardContentTitle = styled.p`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 700;
`

export const CardImageResponsive = styled.div`
  padding-top: 56.25%;
  height: 0;
  position: relative;
`
