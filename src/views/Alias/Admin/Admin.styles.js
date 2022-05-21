import styled from 'styled-components'
import { colors, fontSizes } from '@components/common/common.styles'

export const EditContainer = styled.article`
  padding: 25px;
  margin: 15px 0;
  border-radius: 5px;
  background-color: ${props => colors[props.color]};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: ${fontSizes.l};
    text-transform: uppercase;
    font-weight: 700;
  }
`
export const Mode = styled.div`
  width: calc(33.333% - 9px);
  text-align: center;
  padding: 5px 0;
  border-radius: 5px;
  font-size: ${fontSizes.m};
  font-weight: ${props => (props.active ? 700 : 400)};
  background-color: ${props => colors[props.active ? 'red' : 'purp']};
  box-shadow: ${props =>
    props.active ? '2px 2px 10px rgba(0, 0, 0, 0.25)' : null};
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 35%;
  & > * {
    width: 33.33%;
  }
  span {
    padding: 5px 0;
    text-align: center;
    display: inline-block;
    color: ${colors.white};
    font-size: ${fontSizes.sm};
    background-color: ${colors.purp};
  }
`
export const MinusButton = styled.div`
  position: relative;
  border-radius: 5px 0 0 5px;

  background-color: ${colors.white};
  &::before,
  &::after {
    content: '';
    display: block;
    width: 60%;
    height: 2px;
    background-color: ${colors.purp};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const PlusButton = styled(MinusButton)`
  border-radius: 0 5px 5px 0;

  &::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`
