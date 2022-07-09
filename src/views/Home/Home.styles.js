import {
  Container,
  Title,
  colors,
  LargeText,
  SubTitle,
  Button,
  breakpoints,
  fontSizes,
} from '@components/common/common.styles'

import styled from 'styled-components'
import ScrollIcon from '@assets/img/HomeScroll.svg'
import AliasImg from '@assets/img/AliasImg.svg'
import JeopardyImg from '@assets/img/JeopardyImg.svg'

export const StyledScrollIcon = styled(ScrollIcon)`
  display: block;
  @media screen and (min-width: ${breakpoints.desktop}) {
    transform: scale(1.5);
  }
`
export const HomeContainer = styled(Container)`
  padding: 0 30px;
`

export const Symbol = styled.span`
  z-index: -1;
  font-size: 512px;
  line-height: 600px;
  color: ${props => colors[props.color]};
  font-weight: 900;
  position: absolute;
  right: ${props => props.right}px;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  @media screen and (max-width: ${breakpoints.desktop}) {
  }
  opacity: 0.12;
`

export const HomeWrapper = styled.section`
  position: relative;
  z-index: 5;
  overflow: hidden;
`
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
export const HomeMainTitle = styled(SubTitle)`
  text-transform: uppercase;
  color: ${colors.orange};
  text-align: center;
  margin: 88px 0 30px;
`
export const HomeItemSubTitle = styled(LargeText)`
  font-size: 1.9rem;
  color: ${colors.white};
  font-weight: 900;
`
export const HomeItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 360px));
  gap: 27px;
  justify-content: center;
  margin-bottom: 45px;
  @media screen and (min-width: ${breakpoints.desktop}) {
    margin-bottom: 80px;
  }
`
export const HomeItem = styled.li`
  padding: 15px;
  background-color: ${colors.purp};
`
export const HomeItemImg = styled.div`
  max-width: 250px;

  margin: 15px auto 23px;
`
export const GameButton = styled(Button)`
  font-size: ${fontSizes.m};
  display: block;
  padding: 5px 60px;
  margin: 0 auto;
  background-color: ${props => colors[props.color || 'orange']};
`
export const StyledAliasImg = styled(AliasImg)`
  width: 100%;
`
export const StyledJeopardyImg = styled(JeopardyImg)`
  width: 100%;
`
