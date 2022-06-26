import styled from 'styled-components'
import {
  Wrapper,
  colors,
  fontSizes,
  Title,
  Button,
} from '../../components/common/common.styles'

export const AliasWrapper = styled(Wrapper)`
  flex-grow: 1;
  display: flex;
  padding: 0 15px;
  flex-direction: column;
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
`
export const PopUpButton = styled(Button)``
