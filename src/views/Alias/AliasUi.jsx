import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import AdminUi from './Admin/AdminUi'
import PlayerUi from './Player/PlayerUi'
import { setRules } from '@store/alias/aliasSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function AliasUi() {
  let [searchParams, setSearchParams] = useSearchParams()
  const admin = useSelector(state => state.alias.admin)
  const dispatch = useDispatch()

  useEffect(() => {
    if (searchParams.get('key')) {
      //send request to server ask if session exist
      dispatch(setRules(false))
    } else {
      dispatch(setRules(true))
    }
  })

  return <div>{admin ? <AdminUi /> : <PlayerUi />}</div>
}
