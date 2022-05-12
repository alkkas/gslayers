import {
  Container,
  Title,
  colors,
  LargeText,
} from '@components/common/common.styles'
import styled from 'styled-components'
import ScrollIcon from '@assets/img/HomeScroll.svg'

export const StyledScrollIcon = styled(ScrollIcon)`
  display: block;
`
export const HomeContainer = styled(Container)``
export const HomeText = styled.section`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const HomeHeader = styled(Container)`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 0 0 15px 0;

  &::before,
  &::after {
  }
`

export const HomeTitle = styled(Title)`
  span:nth-child(1) {
    color: ${colors.orange};
  }
  span:nth-child(2) {
    color: ${colors.red};
  }
`
export const HomeMain = styled.main``
export const HomeSubTitle = styled(LargeText)`
  color: ${colors.gray};
  margin-bottom: 50px;
  font-weight: 300;
`
