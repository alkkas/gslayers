import React, { useEffect } from 'react'
import styled from 'styled-components'
import { colors, fontSizes } from '@components/common/common.styles'
import { GameButton } from '@components'
import JSConfetti from 'js-confetti'
import { useDispatch, useSelector } from 'react-redux'
import { cleanUp, statusChange } from '@store/alias/aliasSlice'
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
  const dispatch = useDispatch()
  const winnerId = useSelector(state => state.alias.winner)
  const winner = useSelector(state => state.alias.teams).find(
    team => team.id === winnerId
  )
  function handleClick() {
    dispatch(cleanUp())
    dispatch(statusChange('preGame'))
  }
  useEffect(async () => {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
      confettiColors: ['#9883BF', '#F49497', '#FCC566', '#3CBDA4', '#EF3F6F'],
    })
    setTimeout(() => {
      jsConfetti.addConfetti({
        confettiColors: ['#9883BF', '#F49497', '#FCC566', '#3CBDA4', '#EF3F6F'],
      })
    }, 800)
  })
  return (
    <div style={{ margin: '80px 0 200px' }}>
      <WinTitle>
        {winner.name} <br /> <span>Won!</span>
      </WinTitle>

      <GameButton background="green" click={handleClick}>
        play again
      </GameButton>
    </div>
  )
}
