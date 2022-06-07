import styled from 'styled-components'
import { colors, fontSizes } from '@components/common/common.styles'
import { motion } from 'framer-motion'
export const GameWrapper = styled.section`
  margin-bottom: 100px;
`
export const Wrapper = styled.section`
  max-width: 345px;
  height: 25px;
  overflow: hidden;
  border-bottom: 2px solid ${colors.white};
  color: ${colors.white};
  position: relative;
`
export const Lines = styled.div`
  position: absolute;
  bottom: 4px;
  display: flex;
  justify-content: space-between;
  width: ${props => props.width}px;
`
export const Line = styled.div`
  width: 2px;
  height: 8px;
  background-color: ${colors.white};
`

export const Nums = styled.div`
  position: absolute;
  top: 7px;
  width: ${props => props.width}px;
  display: flex;
  justify-content: space-evenly;
`
export const LargeNum = styled.span`
  font-size: ${fontSizes.l};
  font-weight: 800;
  position: absolute;
  top: 0;
  line-height: 24px;
  background-color: ${colors.purp};
  left: 50%;
  transform: translateX(-50%);
`
export const Moves = styled(motion.div)`
  position: relative;
  height: 100%;
`
export const Num = styled.span`
  width: ${props => props.width * 2 - 2}px;
  text-align: center;
  line-height: 15px;
  background-color: ${colors.purp};
  font-size: ${fontSizes.sm};
`

export const Field = styled.section`
  margin: 15px 0;
  min-height: 300px;
  position: relative;
`
export const Word = styled.span`
  color: ${colors.white};
  filter: blur(1px);
  position: absolute;
  opacity: ${props => props.opacity};
  font-size: ${props => props.fontSize}px;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`
export const MainWord = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${fontSizes.t};
  color: ${colors.white};
  font-weight: 800;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Button = styled.button`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 0;
  outline: none;
  color: ${colors.white};
  text-transform: uppercase;
  font-weight: 800;
  font-size: ${fontSizes.m};
`

export const SkipButton = styled(Button)`
  background-color: ${colors.red};
  border-radius: 5px 0 0 5px;
`
export const GuessButton = styled(Button)`
  background-color: ${colors.green};
  border-radius: 0 5px 5px 0;
`
