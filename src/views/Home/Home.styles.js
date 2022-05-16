import {
  Container,
  Title,
  colors,
  LargeText,
  SubTitle,
  Button,
} from '@components/common/common.styles'
import styled from 'styled-components'
import ScrollIcon from '@assets/img/HomeScroll.svg'
import AliasImg from '@assets/img/AliasImg.svg'
import JeopardyImg from '@assets/img/JeopardyImg.svg'

export const StyledScrollIcon = styled(ScrollIcon)`
  display: block;
`
export const HomeContainer = styled(Container)`
  padding: 0 30px;
  position: relative;
  z-index: 5;
  overflow: hidden;
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

  opacity: 0.12;
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
  color: ${colors.orange};
  text-align: center;
  margin-top: 88px;
`
export const HomeItemSubTitle = styled(SubTitle)`
  color: ${colors.white};
  font-weight: 900;
`
export const HomeItems = styled.ul``
export const HomeItem = styled.li`
  padding: 15px;
  margin: 45px 0;
  background-color: ${colors.purp};
`
export const HomeItemImg = styled.div`
  max-width: 250px;

  margin: 15px auto 23px;
`
export const GameButton = styled(Button)`
  display: block;
  padding: 10px 70px;
  margin: 0 auto;
  background-color: ${props => colors[props.color || 'orange']};
`
export const StyledAliasImg = styled(AliasImg)`
  width: 100%;
`
export const StyledJeopardyImg = styled(JeopardyImg)`
  width: 100%;
`
