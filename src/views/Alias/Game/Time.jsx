import React, { useState, useEffect, useRef } from 'react'
import { useTimer } from 'use-timer'
import * as Styles from './Games.styles'
import { useDimensions } from '@utils/hooks/useDimensions'
import Moves from './Moves'
import { useSelector, useDispatch } from 'react-redux'
import {
  statusChange,
  teamPointsChange,
  reverseOrder,
} from '@store/alias/aliasSlice'

export default function Time({ disabled }) {
  const startTime = useSelector(state => state.alias.settings.time)
  const dispatch = useDispatch()
  const { time, start, pause, reset, status } = useTimer({
    initialTime: startTime,
    endTime: 0,
    timerType: 'DECREMENTAL',
  })
  const wrapper = useRef(null)
  const { width } = useDimensions(wrapper)

  const count = 18 + Math.round(startTime / 10) * 5
  const timerWidth = (width / 18) * count
  const endX = -(timerWidth - width)

  useEffect(() => {
    start()
  }, [])
  useEffect(() => {
    console.log(status)
    if (status === 'STOPPED' && time < startTime && !disabled) {
      dispatch(statusChange('endRound'))
      dispatch(teamPointsChange())
      dispatch(reverseOrder())
    }
  })
  return (
    <>
      <Styles.Wrapper ref={wrapper}>
        <Moves
          endX={endX}
          count={count}
          timerWidth={timerWidth}
          width={width}
          status={status}
          startTime={startTime}
        />

        <Styles.LargeNum>{time}</Styles.LargeNum>
      </Styles.Wrapper>
    </>
  )
}
