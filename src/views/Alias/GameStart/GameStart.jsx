import React, { useEffect } from 'react'
import RoundStartTeams from '../Teams/RoundStartTeams'
import enhancedTeams from '../Teams/Teams'
import { GameButton } from '@components'
import { useDispatch, useSelector } from 'react-redux'
import {
  statusChange,
  fetchWords,
  setWinner,
  setCurrentTeam,
  reverseOrder,
} from '@store/alias/aliasSlice'

const StartTeams = enhancedTeams(RoundStartTeams)

export default function GameStart() {
  const dispatch = useDispatch()
  const wordsSettled = useSelector(state => state.alias.wordsSettled)
  const teams = useSelector(state => state.alias.teams)
  const rounds = useSelector(state => state.alias.rounds)
  const points = useSelector(state => state.alias.settings.points)
  const teamsCount = teams.length
  const currentTeamId = useSelector(state => state.alias.currentTeam)
  const currentTeam = teams.find(team => team.id === currentTeamId) || teams[0]
  const currentPlayer = useSelector(state => state.alias.currentPlayer)
  const explainingPlayer = currentTeam.players[currentTeam.explaining]

  useEffect(() => {
    if (!wordsSettled) {
      // dispatch(statusChange('loading'))
      dispatch(fetchWords())
    }

    if (currentPlayer === explainingPlayer) {
      dispatch(statusChange('loading'))
      const winners = []
      if (rounds % teamsCount === 0 && rounds !== 0) {
        teams.forEach(i => {
          if (i.points >= points) {
            winners.push(i)
          }
        })
      }
      if (winners.length === 1) {
        dispatch(statusChange('win'))
        dispatch(setWinner(winners[0].id))
      } else {
        dispatch(setCurrentTeam(teams[(rounds + 1) % teams.length].id))
        dispatch(statusChange('endRound'))
      }
      dispatch(reverseOrder())
    }
  })
  return (
    <div style={{ margin: '-20px 0 80px' }}>
      <StartTeams />
      <GameButton click={() => dispatch(statusChange('game'))}>
        start
      </GameButton>
    </div>
  )
}
