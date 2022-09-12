import React, { useState, useRef, useEffect } from 'react'
import * as Styles from './Admin.styles'
import { useSelector, useDispatch } from 'react-redux'
import {
  useGetPreGameDataQuery,
  useSendDataMutation,
} from '@store/api/apiSlice'

type CounterProps = {
  type: 'points' | 'time'
  changeValue: (arg: number) => { type: string; payload: number }
}

export default function Counter({
  type,
  changeValue,
}: CounterProps): JSX.Element {
  const { data } = useGetPreGameDataQuery()
  const [sendData] = useSendDataMutation()
  const settings = data.settings
  const value = settings[type]

  const input = useRef(null)

  function checkValue() {
    const focused = document.activeElement
    if (input.current !== focused) {
      if (value < 15) {
        addValue(15)
      }
    }
  }

  function addValue(value: string | number) {
    if (!isNaN(+value)) {
      if (+value > 180) {
        sendData(changeValue(180))
      } else if (+value <= 0) {
        sendData(changeValue(0))
      } else {
        sendData(changeValue(+value))
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', checkValue)
    document.addEventListener('click', checkValue)
    return () => {
      document.removeEventListener('keyup', checkValue)
      document.removeEventListener('click', checkValue)
    }
  }, [])

  return (
    <Styles.Wrapper>
      <Styles.MinusButton onClick={() => addValue(value - 1)} />
      <input
        ref={input}
        value={value}
        onChange={event => addValue(event.target.value)}
      />
      <Styles.PlusButton onClick={() => addValue(value + 1)} />
    </Styles.Wrapper>
  )
}
