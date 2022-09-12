import React from 'react'
import styled from 'styled-components'
import { fontSizes, colors, breakpoints } from '../common/common.styles'

const StyledButton = styled.button`
  background-color: ${props =>
    props.background ? colors[props.background] : colors.red};
  padding: 10px 60px;
  font-size: ${fontSizes.l};
  font-weight: 800;
  color: ${colors.white};
  border: 0px;
  display: block;
  margin: 0 auto;
  text-transform: uppercase;
  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 20px 80px;
  }
`
type buttonProps = {
  background?: string
  click?: () => void
}
const Button: React.FC<buttonProps> = ({ children, background, click }) => {
  return (
    <StyledButton background={background} onClick={click}>
      {children}
    </StyledButton>
  )
}
