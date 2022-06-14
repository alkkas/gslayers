import React, { useEffect } from 'react'
import * as Styles from './Teams.styles'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { selectAllPlayers } from '@/store/alias/aliasSlice'
import TeamsAdmin from './TeamsAdmin'
import TeamsPlayers from './TeamsPlayers'
import { addTeam } from '@store/alias/aliasSlice'

export default function PreGameTeams({ admin }) {
  const players = useSelector(selectAllPlayers)
  const dispatch = useDispatch()

  return (
    <>
      {console.log(players)}
      <TeamsAdmin />
      <Styles.AddTeam onClick={() => dispatch(addTeam())}>add</Styles.AddTeam>
      <Styles.PlayersTitle>players:</Styles.PlayersTitle>
      <Styles.AvailablePlayers>
        {players.map(i => {
          if (i.status === 'available') {
            return <Styles.PlayersItem key={i.id}>{i.name}</Styles.PlayersItem>
          }
        })}
      </Styles.AvailablePlayers>
    </>
  )
}
