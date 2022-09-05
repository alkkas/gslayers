import React from 'react'
import { Loading, Error } from '@components/index'
import * as Styles from './Alias.styles'
import AliasUi from './AliasUi'
import Game from './Game/Game'
import GameStart from './GameStart/GameStart'
import WinScreen from './WinScreen/WinScreen'

import AliasLogin from './AliasLogin'
import { useGetLobbyDataQuery } from '@store/api/apiSlice'

export default function Alias() {
  const { data, isLoading, isError, isSuccess, error } = useGetLobbyDataQuery()

  function renderState() {
    switch (data.status) {
      case 'inputName':
        return <AliasLogin />
        break
      case 'preGame':
        return <AliasUi />
        break
      case 'game':
        return <Game />
        break
      case 'endRound':
        return <GameStart />
        break
      case 'win':
        return <WinScreen />
        break
    }
  }

  return (
    <>
      <Styles.AliasWrapper>
        <Styles.AliasTitle>
          <span>ALIAS </span>
          <span>under the hedge</span>
        </Styles.AliasTitle>
        {isLoading && <Loading />}
        {isError && <Error info={error} />}
        {isSuccess && renderState()}
      </Styles.AliasWrapper>
    </>
  )
}
