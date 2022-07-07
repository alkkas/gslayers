import styled from 'styled-components'
import { Container } from '../common/common.styles'
import { motion } from 'framer-motion'
export const LoadingContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-top: 25vh;
`
export const LoadingImg = styled(motion.img)`
  max-width: 64px;
  display: block;
`
