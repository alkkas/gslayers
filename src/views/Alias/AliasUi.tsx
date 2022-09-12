import React from 'react'
import AdminUi from './Admin/AdminUi'
import PlayerUi from './Player/PlayerUi'
import { useGetPreGameDataQuery } from '@store/api/apiSlice'

export default function AliasUi(): JSX.Element {
  const { data } = useGetPreGameDataQuery()
  const isAdmin = data.admin === data.currentPlayer

  return <>{isAdmin ? <AdminUi /> : <PlayerUi />}</>
}
