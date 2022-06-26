import styled from 'styled-components'
import { LargeText, colors, Container } from '../common/common.styles'

export const Text = styled(LargeText)`
  color: ${colors.orange};
  text-align: center;
`
export const ErrorContainer = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
`
