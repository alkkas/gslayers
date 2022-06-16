import styled from 'styled-components'
import {
  fontSizes,
  colors,
  breakpoints,
} from '@components/common/common.styles'

export const InfoContainer = styled.article`
  margin: 15px 0;
  display: flex;
  align-items: center;
  background-color: ${props => colors[props.color]};
  border-radius: 5px;
  flex-grow: 1;
  h2,
  span {
    font-size: ${fontSizes.l};
    color: ${colors.white};
  }
  h2 {
    flex-grow: 1;
    padding: 0 0 0 15px;
    text-transform: uppercase;
  }
  span {
    display: inline-block;
    border-radius: 0 5px 5px 0;
    background-color: ${colors.green};
    padding: 15px;
    width: 100px;
    text-align: center;
    @media screen and (min-width: ${breakpoints.tablet}) {
      width: auto;
    }
  }
`
export const infoWrapper = styled.section`
  @media screen and (min-width: ${breakpoints.tablet}) {
    gap: 30px;
    display: flex;
    justify-content: center;
    align-item: center;
  }
`
