import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import AdminUi from './Admin/AdminUi'
import PlayerUi from './Player/PlayerUi'

export default function AliasUi() {
  let [searchParams, setSearchParams] = useSearchParams()
  let [status, setStatus] = useState('player')
  function renderBlocks() {
    switch (status) {
      case 'player':
        return <PlayerUi />
      case 'admin':
        return <AdminUi />
    }
  }
  useEffect(() => {
    if (searchParams.get('key')) {
      //send request to server ask if session exist
      setStatus('player')
    } else {
      setStatus('admin')
    }
  })

  return <div>{renderBlocks()}</div>
}
