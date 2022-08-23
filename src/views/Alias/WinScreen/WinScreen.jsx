import React, { useEffect } from 'react'
import styled from 'styled-components'
import { colors, breakpoints } from '@components/common/common.styles'
import { GameButton } from '@components'
import JSConfetti from 'js-confetti'
import { useDispatch, useSelector } from 'react-redux'
import { cleanUp, statusChange } from '@store/alias/aliasSlice'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '../../../store/hooks'
const WinTitle = styled.h1`
  font-weight: 900;
  font-size: 50px;
  word-break: break-all;
  color: ${colors.white};
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 40px;
  span {
    color: ${colors.orange};
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 64px;
  }
`
export default function WinScreen() {
  const dispatch = useAppDispatch()
  const winnerId = useSelector(state => state.alias.winner)
  const admin = useSelector(state => state.alias.admin)
  const player = useSelector(state => state.alias.currentPlayer)

  const winner = useSelector(state => state.alias.teams).find(
    team => team.id === winnerId
  )
  const { t } = useTranslation()
  function handleClick() {
    dispatch(cleanUp())
    dispatch(statusChange('preGame'))
  }
  useEffect(() => {
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
        {winner?.name} <br /> <span>{t('win')}</span>
      </WinTitle>
      {admin === player ? (
        <GameButton background="green" click={handleClick}>
          {t('again')}
        </GameButton>
      ) : null}
    </div>
  )
}
