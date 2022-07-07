import styled from 'styled-components'
import { colors, fontSizes } from '@components/common/common.styles'

export const Wrapper = styled.div`
  width: 65px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: ${props => (props.desktop ? 'relative' : 'absolute')};
  left: ${props => (props.desktop ? '0' : '15px')};
  bottom: ${props => (props.desktop ? '0' : '10px')};
  margin-top: ${props => (props.desktop ? '-7px' : 0)};
  &::before {
    content: '';
    width: 2px;
    height: 70%;
    background-color: ${colors.orange};
    position: absolute;
    top: 55%;
    left: calc(50% + 2px);
    transform: translate(-50%, -50%);
  }
`
export const Lang = styled.button`
  cursor: pointer;
  background: none;
  border: 0;
  flex-grow: 1;
  text-align: center;
  transition: 0.2s ease all;
  font-size: ${fontSizes.l};
  color: ${colors.white};
  opacity: ${props => (props.active ? 1 : 0.5)};
`
