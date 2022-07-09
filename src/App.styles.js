import styled from 'styled-components'
import { Wrapper, colors } from '@components/common/common.styles'

export const MainWrapper = styled(Wrapper)`
  background-color: ${props => colors[props.background]};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
