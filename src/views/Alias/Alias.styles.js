import styled from 'styled-components'
import {
  Wrapper,
  colors,
  fontSizes,
  Title,
  Button,
  breakpoints,
} from '../../components/common/common.styles'

export const AliasWrapper = styled(Wrapper)`
  padding: 0 15px;
  min-height: 100vh;
  flex-grow: 1;
  max-width: 572px;
  width: 100%;
  @media screen and (min-width: ${breakpoints.tablet}) {
    margin: 0 auto;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    max-width: 768px;
  }
`
export const AliasTitle = styled(Title)`
  color: ${colors.white};
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 100px 0 50px;
  span:nth-child(2) {
    font-size: ${fontSizes.sm};
    font-weight: 400;
    margin-top: -10px;
  }
`
//teams component styles
//alias popup styles

export const PopUpWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  height: 100%;
  background-color: ${colors.purp};
`
export const PopUpInput = styled.input`
  width: 300px;
  height: 40px;
  background: none;
  border: 0;
  border-bottom: 2px solid ${colors.orange};
  color: ${colors.white};
  font-size: ${fontSizes.sm};
  &::placeholder {
    color: ${colors.white};
  }
`
export const PopUpButton = styled(Button)``
