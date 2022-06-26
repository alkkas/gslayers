import React, { useState, useRef } from 'react'
import { useDimensions } from '@utils/hooks/useDimensions'
import { useTimer } from 'use-timer'
import * as Styles from './Games.styles'
import Time from './Time'
import { useEffect } from 'react/cjs/react.production.min'
import Field from './Field'

export default function Game() {
  return (
    <Styles.GameWrapper>
      <Time />
      <Field />

      <Styles.ButtonContainer>
        <Styles.SkipButton>
          <span>5</span>
          <span>skipped</span>
        </Styles.SkipButton>
        <Styles.GuessButton>
          <span>guessed</span>
          <span>5</span>
        </Styles.GuessButton>
      </Styles.ButtonContainer>
    </Styles.GameWrapper>
  )
}
