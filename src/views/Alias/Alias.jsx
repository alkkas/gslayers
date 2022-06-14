import React, { useEffect, useState } from 'react'
import { Loading, Error } from '@components'
import { Container } from '@components/common/common.styles'
import * as Styles from './Alias.styles'
import AliasUi from './AliasUi'
import Game from './Game/Game'
import GameStart from './GameStart/GameStart'
import WinScreen from './WinScreen/WinScreen'

import { useSelector } from 'react-redux'
import { selectStatus } from '@store/alias/aliasSlice'

export default function Alias() {
  const status = useSelector(selectStatus)

  function renderState() {
    switch (status) {
      case 'loading':
        return <Loading />
      case 'preGame':
        return <AliasUi />
      case 'game':
        return <Game />
      case 'endRound':
        return <GameStart />
      case 'win':
        return <WinScreen />
      default:
        return <Error info="you encountered with troubles!" />
    }
  }

  return (
    <>
      <Styles.AliasWrapper>
        <Styles.AliasTitle>
          <span>ALIAS </span>
          <span>under the hedge</span>
        </Styles.AliasTitle>
        {renderState()}
      </Styles.AliasWrapper>
    </>
  )
}
