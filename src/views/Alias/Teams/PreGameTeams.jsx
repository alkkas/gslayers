import React, { useEffect } from 'react'
import * as Styles from './Teams.styles'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { selectAllPlayers } from '@/store/alias/aliasSlice'
import TeamsAdmin from './TeamsAdmin'
import TeamsPlayers from './TeamsPlayers'
import { addTeam, statusChange } from '@store/alias/aliasSlice'
import { GameButton } from '@components'

export default function PreGameTeams({ admin }) {
  const players = useSelector(selectAllPlayers)
  const teams = useSelector(state => state.alias.teams)
  console.log(teams)
  const dispatch = useDispatch()

  return (
    <>
      <TeamsAdmin />
      <Styles.AddTeam onClick={() => dispatch(addTeam())}>add</Styles.AddTeam>

      {teams.every(item =>
        Object.values(item.players).every(item => item !== null)
      ) ? (
        <div onClick={() => dispatch(statusChange('endRound'))}>
          <GameButton background="red">START</GameButton>
        </div>
      ) : null}

      <Styles.AvailablePlayers>
        {players.map(i => {
          if (!i.team) {
            return <Styles.PlayersItem key={i.id}>{i.name}</Styles.PlayersItem>
          }
        })}
      </Styles.AvailablePlayers>
    </>
  )
}
