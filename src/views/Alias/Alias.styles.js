import styled from 'styled-components'
import {
  Wrapper,
  colors,
  fontSizes,
  Title,
} from '../../components/common/common.styles'

export const AliasWrapper = styled(Wrapper)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`
export const AliasTitle = styled(Title)`
  color: ${colors.white};
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  span:nth-child(2) {
    font-size: ${fontSizes.sm};
    font-weight: 400;
    margin-top: -10px;
  }
`
