import React, { useState, useRef, useEffect } from 'react'
import { useDimensions } from '@utils/hooks/useDimensions'
import { useTimer } from 'use-timer'
import * as Styles from './Games.styles'
import Time from './Time'
import Field from './Field'
import {
  statusChange,
  teamPointsChange,
  sessionChange,
} from '@store/alias/aliasSlice'
import { useSelector, useDispatch } from 'react-redux'
import { random } from 'lodash'

export default function Game() {
  const words = useSelector(state => state.alias.words) || [
    'f2f2f1',
    '21312312',
  ]
  // const currentWord = useSelector(
  //   state => state.alias.currentSession.currentWord
  // )
  // const usedWords = useSelector(state => state.alias.currentSession.usedWords)
  // const startTime = useSelector(state => state.alias.settings.time)
  // const currentPlayer = useSelector(state => state.alias.currentPlayer)
  // const currentTeamId = useSelector(state => state.alias.currentTeam)
  // const [firstLoad, setFirstLoad] = useState(true)
  // const currentTeam = useSelector(state => state.alias.teams).find(
  //   team => team.id === currentTeamId
  // )
  // const guessingPlayer = currentTeam.players[currentTeam.guessing]
  // const explainingPlayer = currentTeam.players[currentTeam.explaining]
  // const session = useSelector(state => state.alias.currentSession)
  // const disabled = currentPlayer !== explainingPlayer
  // const dispatch = useDispatch()
  // //   currentTeam.players[currentTeam.explaining - 1] === currentPlayer
  // useEffect(() => {
  //   if (firstLoad && !disabled) {
  //     console.log('first dispatch')
  //     const currentWord = words[random(words.length - 1)]
  //     dispatch(
  //       sessionChange({
  //         skipped: session.skipped,
  //         guessed: session.guessed,
  //         currentWord,
  //         usedWords: [...session.usedWords, currentWord],
  //       })
  //     )
  //     setFirstLoad(false)
  //     setTimeout(() => {
  //       dispatch(teamPointsChange())
  //       dispatch(statusChange('endRound'))
  //     }, (startTime + 1) * 1000)
  //   }
  // })

  // function handleClick(action) {
  //   let newWord = words[random(words.length - 1)]
  //   let exist = usedWords.find(word => word === newWord)
  //   while (exist) {
  //     newWord = words[random(words.length - 1)]
  //     exist = usedWords.find(word => word === newWord)
  //   }

  //   const skipped = action === 'skip' ? session.skipped + 1 : session.skipped
  //   const guessed = action === 'guess' ? session.guessed + 1 : session.guessed

  //   dispatch(
  //     sessionChange({
  //       skipped,
  //       guessed,
  //       currentWord: newWord,
  //       usedWords: [...session.usedWords, newWord],
  //     })
  //   )
  // }

  return (
    <Styles.GameWrapper>
      <Time />
      <Field word={'asdfa'} />

      <Styles.ButtonContainer>
        <Styles.SkipButton
          // disabled={disabled}
          onClick={() => handleClick('skip')}
        >
          {/* <span>{session.skipped}</span> */}
          <span>skipped</span>
        </Styles.SkipButton>
        <Styles.GuessButton
          // disabled={disabled}
          onClick={() => handleClick('guess')}
        >
          <span>guessed</span>
          {/* <span>{session.guessed}</span> */}
        </Styles.GuessButton>
      </Styles.ButtonContainer>
    </Styles.GameWrapper>
  )
}
