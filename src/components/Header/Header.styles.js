import styled from 'styled-components'
import { breakpoints, colors, Container } from '../common/common.styles'

export const HeaderWrapper = styled(Container)`
  position: fixed;
`
export const MenuBurgerWrapper = styled.div`
  margin-top: 20px;
  display: block;
  width: 37px;
  height: 13px;
  position: relative;
  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    position: absolute;
    background-color: ${colors.red};
  }
  &::after {
    bottom: 0;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const MenuItems = styled.ul`
  display: flex;
`
export const MenuItem = styled.li``
export const MenuWrapper = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${colors.green};
  @media screen and (max-width: ${breakpoints.tablet}) {
    height: 100%;
  }
`
