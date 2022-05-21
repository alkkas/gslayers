import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Loading, Error } from '@components'
import { Container } from '@components/common/common.styles'
import * as Styles from './Alias.styles'
import Player from './Player/PlayerUi'
import Admin from './Admin/AdminUi'
import { usePrompt } from '@utils/hooks/usePrompt'

export default function Alias() {
  //not working function
  let [searchParams, setSearchParams] = useSearchParams()
  let [status, setStatus] = useState('loading')

  // usePrompt(
  //   'Are you sure you want to leave?',
  //   status === 'player' || status === 'admin'
  // )

  useEffect(() => {
    if (searchParams.get('key')) {
      //send request to server ask if session exist
      setStatus('player')
    } else {
      setStatus('admin')
    }
  })

  return (
    <>
      <Styles.AliasWrapper>
        <Styles.AliasTitle>
          <span>ALIAS </span>
          <span>under the hedge</span>
        </Styles.AliasTitle>
        {status === 'loading' ? (
          <Loading />
        ) : status === 'player' ? (
          <Player />
        ) : status === 'admin' ? (
          <Admin />
        ) : (
          <Error info="you encountered with troubles!" />
        )}
      </Styles.AliasWrapper>
    </>
  )
}
