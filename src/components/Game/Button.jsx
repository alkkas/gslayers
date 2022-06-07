import React from 'react'
import styled from 'styled-components'
import { fontSizes, colors } from '../common/common.styles'

const StyledButton = styled.button`
  background-color: ${props =>
    props.background ? colors[props.background] : colors.red};
  padding: 20px 60px;
  font-size: ${fontSizes.l};
  font-weight: 800;
  color: ${colors.white};
  border: 0px;
  display: block;
  margin: 0 auto;
  text-transform: uppercase;
`

export default function Button({ children, background }) {
  return <StyledButton background={background}>{children}</StyledButton>
}
