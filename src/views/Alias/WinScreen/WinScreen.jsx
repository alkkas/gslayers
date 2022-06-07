import React, { useEffect } from 'react'
import styled from 'styled-components'
import { colors, fontSizes } from '@components/common/common.styles'
import { GameButton } from '@components'
import JSConfetti from 'js-confetti'

const WinTitle = styled.h1`
  font-weight: 900;
  font-size: 64px;
  color: ${colors.white};
  text-align: center;
  text-transform: uppercase;
  span {
    color: ${colors.orange};
  }
`
export default function WinScreen() {
  useEffect(() => {
    const jsConfetti = new JSConfetti()

    jsConfetti.addConfetti({
      confettiColors: ['#9883BF', '#F49497', '#FCC566', '#3CBDA4', '#EF3F6F'],
    })
  })
  return (
    <div style={{ margin: '80px 0 200px' }}>
      <WinTitle>
        Slayers <br /> <span>Won!</span>
      </WinTitle>
      <GameButton background="green">play again</GameButton>
    </div>
  )
}
