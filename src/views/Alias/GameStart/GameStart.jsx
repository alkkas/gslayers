import React, { useEffect } from 'react'
import RoundStartTeams from '../Teams/RoundStartTeams'
import enhancedTeams from '../Teams/Teams'
import { GameButton } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import { statusChange, fetchWords } from '@store/alias/aliasSlice'

const StartTeams = enhancedTeams(RoundStartTeams)

export default function GameStart() {
  const dispatch = useDispatch()
  const wordsSettled = useSelector(state => state.alias.wordsSettled)

  useEffect(() => {
    dispatch(statusChange('loading'))
    if (!wordsSettled) {
      dispatch(fetchWords())
    } else {
      dispatch(statusChange('endRound'))
    }
  })
  return (
    <div style={{ margin: '-40px 0 80px' }}>
      <StartTeams />
      <GameButton click={() => dispatch(statusChange('game'))}>
        start
      </GameButton>
    </div>
  )
}
