import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import AdminUi from './Admin/AdminUi'
import PlayerUi from './Player/PlayerUi'
import { Loading } from '@components'
import { setRules, statusChange } from '@store/alias/aliasSlice'
import { useSelector, useDispatch } from 'react-redux'
import { getValue } from '@services/localStorage'
import AliasPopUp from './AliasPopUp'
import { sendReq } from '@/services/alias/sendReq'

export default function AliasUi() {
  let [searchParams, setSearchParams] = useSearchParams()
  const admin = useSelector(state => state.alias.admin)
  const currentPlayer = useSelector(state => state.alias.currentPlayer)
  const [status, setStatus] = useState('loading')
  const dispatch = useDispatch()

  useEffect(async () => {})

  return <>{admin === currentPlayer ? <AdminUi /> : <PlayerUi />}</>
}
