import styled from 'styled-components'
import { fontSizes, colors } from '@components/common/common.styles'

export const InfoContainer = styled.article`
  margin: 15px 0;
  display: flex;
  align-items: center;
  background-color: ${props => colors[props.color]};
  border-radius: 5px;

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
    width: 75px;
    text-align: center;
  }
`
