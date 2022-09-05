import React from 'react'
import AdminUi from './Admin/AdminUi'
import PlayerUi from './Player/PlayerUi'
import { useGetLobbyDataQuery } from '@store/api/apiSlice'

export default function AliasUi() {
  const { data } = useGetLobbyDataQuery()
  const isAdmin = data.admin === data.currentPlayer

  return <>{isAdmin ? <AdminUi /> : <PlayerUi />}</>
}
