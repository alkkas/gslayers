import React, { useState, useRef } from 'react'
import { useTimer } from 'use-timer'
import * as Styles from './Games.styles'
import { useDimensions } from '@utils/hooks/useDimensions'

export default function Time() {
  const startTime = 120

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

  const variants = {
    static: { x: endX },
    dinamic: { x: -(timerWidth - width) },
  }
  function handleClick() {
    start()
    setEndX(-(timerWidth - width))
  }
  function getLines() {
    let lines = []
    for (let i = 0; i < count + 1; i++) {
      lines.push(<Styles.Line key={i} />)
    }
    return lines
  }
  function getNums(cells) {
    let nums = []
    const count = startTime / 10 + 1
    const width = timerWidth / cells
    for (let i = -1; i < count + 1; i++) {
      nums.push(
        <Styles.Num key={i} width={width}>
          {i * 10}
        </Styles.Num>
      )
    }
    return nums.reverse()
  }
  return (
    <div>
      <Styles.Wrapper ref={wrapper}>
        <Styles.Moves
          variants={variants}
          animate={status === 'RUNNING' ? 'dinamic' : 'static'}
          transition={{
            duration: startTime,
            ease: 'linear',
          }}
        >
          <Styles.Lines width={timerWidth}>{getLines()}</Styles.Lines>
          <Styles.Nums width={timerWidth}>{getNums(count)}</Styles.Nums>
        </Styles.Moves>

        <Styles.LargeNum>{time}</Styles.LargeNum>
      </Styles.Wrapper>
      <button onClick={handleClick}>start</button>
    </div>
  )
}
