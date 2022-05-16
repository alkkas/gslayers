import styled from 'styled-components'
import {
  Container,
  ExtraSmallText,
  fontSizes,
  colors,
} from '../common/common.styles'
import coffee from '@assets/img/coffee.png'
import githubLogo from '@assets/img/github-logo.png'

export const FooterWrapper = styled.footer`
  border: 1px solid ${colors.green};
  padding: 0 30px;
  background-color: ${colors.green};
`
export const FooterItem = styled.article``
export const FooterContainer = styled(Container)`
  padding: 0;
  display: flex;
  margin-top: 35px;
  justify-content: space-between;
  align-items: flex-start;
`
export const FooterSubTitle = styled.h4`
  font-size: ${fontSizes.m};
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 10px;
`
export const FooterSubItem = styled.a`
  display: inline-block;
  margin: 8px 0;
  text-decoration: none;
  font-size: ${fontSizes.sm};
  font-weight: 300;
  color: ${colors.white};
  &::after {
    content: url(${props => (props.github ? githubLogo : coffee)});
    margin-left: 5px;
  }
`
export const Rights = styled(ExtraSmallText)`
  text-align: center;
  color: ${colors.white};
  margin: 41px 0 5px 0;
`
