import React, { useState, useRef } from 'react'
import { useTimer } from 'use-timer'
import * as Styles from './Games.styles'
import { useDimensions } from '@utils/hooks/useDimensions'
import Moves from './Moves'
import { useSelector } from 'react-redux'
export default function Time() {
  const startTime = useSelector(state => state.alias.settings.time)
  const { time, start, pause, reset, status } = useTimer({
    initialTime: startTime,
    endTime: 0,
    timerType: 'DECREMENTAL',
  })
  const [endX, setEndX] = useState(0)

  const wrapper = useRef(null)
  const { width } = useDimensions(wrapper)

  const count = 18 + Math.round(startTime / 10) * 5
  const timerWidth = (width / 18) * count

  function handleClick() {
    start()
    setEndX(-(timerWidth - width))
  }

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
      <button onClick={handleClick}>start</button>
    </>
  )
}
