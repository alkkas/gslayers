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
import { useTranslation } from 'react-i18next'

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
  const admin = useSelector(state => state.alias.admin)
  const lobbyId = useSelector(state => state.alias.lobbyId)
  const { t } = useTranslation()
  useEffect(() => {
    console.log('endRound')
    if (!wordsSettled) {
      dispatch(fetchWords(lobbyId))
    }
  }, [])
  useEffect(() => {
    if (currentPlayer === admin) {
      dispatch(statusChange('loading'))
      const winners = []
      let winner = null
      if (rounds % teamsCount === 0 && rounds !== 0) {
        teams.forEach(i => {
          if (i.points >= points) {
            winners.push(i)
          }
        })

        console.log(winners)
        if (winners.length) {
          let completeWinner = winners[0]
          let maxPoints = winners[0].points
          for (let i = 1; i < winners.length; i++) {
            if (winners[i].points > maxPoints) {
              completeWinner = winners[i]
              maxPoints = winners[i].points
            } else if (winners[i].points === maxPoints) {
              completeWinner = null
            }
          }

          winner = completeWinner
        }
      }
      if (winner) {
        dispatch(statusChange('win'))
        dispatch(setWinner(winners[0].id))
      } else {
        console.log('teamsChange', rounds % teams.length)
        dispatch(setCurrentTeam(teams[rounds % teams.length].id))
        dispatch(statusChange('endRound'))
      }
    }
  })
  return (
    <div style={{ margin: '-20px 0 80px' }}>
      <StartTeams />
      {currentPlayer === explainingPlayer ? (
        <GameButton click={() => dispatch(statusChange('game'))}>
          {t('start')}
        </GameButton>
      ) : null}
    </div>
  )
}
