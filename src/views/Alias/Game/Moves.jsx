import React from 'react'
import * as Styles from './Games.styles'

const Moves = React.memo(
  ({ endX, timerWidth, width, status, startTime, count }) => {
    const variants = {
      static: { x: endX },
      dinamic: { x: -(timerWidth - width) },
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
      <Styles.Moves
        variants={variants}
        animate={status === 'RUNNING' ? 'dinamic' : 'static'}
        transition={{
          duration: startTime + 0.25,
          ease: 'linear',
        }}
      >
        <Styles.Lines width={timerWidth}>{getLines()}</Styles.Lines>
        <Styles.Nums width={timerWidth}>{getNums(count)}</Styles.Nums>
      </Styles.Moves>
    )
  }
)

export default Moves
