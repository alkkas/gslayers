import React, { useEffect } from 'react'
import * as Styles from './Teams.styles'

import TeamsAdmin from './TeamsAdmin'
import { GameButton } from '@components/index'
import { useTranslation } from 'react-i18next'
import {
  useGetPreGameDataQuery,
  useSendDataMutation,
} from '@store/api/apiSlice'
import { addTeam, statusChange } from '@store/api/actions'

export default function PreGameTeams() {
  const { data } = useGetPreGameDataQuery()
  const [sendData] = useSendDataMutation()
  const players = data.players
  const teams = data.teams
  const currentPlayer = data.currentPlayer
  const admin = data.admin
  const { t } = useTranslation()

  return (
    <>
      <TeamsAdmin />
      <Styles.AddTeam onClick={() => sendData(addTeam())}>
        {t('add')}
      </Styles.AddTeam>

      {currentPlayer === admin &&
      teams.length !== 0 &&
      teams.every(item =>
        Object.values(item.players).every(item => item !== null)
      ) ? (
        <div onClick={() => sendData(statusChange('endRound'))}>
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
