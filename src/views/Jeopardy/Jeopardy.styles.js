import styled from 'styled-components'
import { Wrapper, Title, colors } from '@components/common/common.styles'

export const JWrapper = styled(Wrapper)`
  display: grid;
  justify-content: center;
  align-content: center;
  flex-grow: 1;
`
export const JTitle = styled(Title)`
  color: ${colors.orange};
  span {
    color: ${colors.red};
  }
`
