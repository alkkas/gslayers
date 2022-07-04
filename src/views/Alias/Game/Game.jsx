import React, { useState, useRef, useEffect } from 'react'
import { useDimensions } from '@utils/hooks/useDimensions'
import { useTimer } from 'use-timer'
import * as Styles from './Games.styles'
import Time from './Time'
import Field from './Field'
import { statusChange } from '@store/alias/aliasSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function Game() {
  const currentPlayer = useSelector(state => state.alias.currentPlayer)
  const currentTeam = useSelector(state => state.alias.currentTeam)
  const disabled = false
  const dispatch = useDispatch()
  //   currentTeam.players[currentTeam.explaining - 1] === currentPlayer

  return (
    <Styles.GameWrapper>
      <Time />
      <Field />

      <Styles.ButtonContainer>
        <Styles.SkipButton disabled={disabled}>
          <span>0</span>
          <span>skipped</span>
        </Styles.SkipButton>
        <Styles.GuessButton disabled={disabled}>
          <span>guessed</span>
          <span>0</span>
        </Styles.GuessButton>
      </Styles.ButtonContainer>
    </Styles.GameWrapper>
  )
}
