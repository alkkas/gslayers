import React, { useEffect } from 'react'
import * as Styles from './Teams.styles'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { selectAllPlayers } from '@store/alias/mainSlice'
import TeamsAdmin from './TeamsAdmin'
import { addTeam, statusChange } from '@store/alias/mainSlice'
import { GameButton } from '@components'
import { useTranslation } from 'react-i18next'

export default function PreGameTeams() {
  const players = useSelector(selectAllPlayers)
  const teams = useSelector(state => state.alias.teams)
  const currentPlayer = useSelector(state => state.alias.currentPlayer)
  const admin = useSelector(state => state.alias.admin)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  return (
    <>
      <TeamsAdmin />
      <Styles.AddTeam onClick={() => dispatch(addTeam())}>
        {t('add')}
      </Styles.AddTeam>

      {currentPlayer === admin &&
      teams.length !== 0 &&
      teams.every(item =>
        Object.values(item.players).every(item => item !== null)
      ) ? (
        <div onClick={() => dispatch(statusChange('endRound'))}>
          <GameButton background="red">{t('start')}</GameButton>
        </div>
      ) : null}
      <Styles.PlayersTitle>{t('spectate')}:</Styles.PlayersTitle>
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
