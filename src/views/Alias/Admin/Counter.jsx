import React, { useState } from 'react'
import * as Styles from './Admin.styles'
import { useSelector, useDispatch } from 'react-redux'

export default function Counter({ type, changeValue }) {
  const value = useSelector(state => state.alias.settings[type])
  const dispatch = useDispatch()
  return (
    <Styles.Wrapper>
      <Styles.MinusButton onClick={() => dispatch(changeValue(value - 1))} />
      <span>{value}</span>
      <Styles.PlusButton onClick={() => dispatch(changeValue(value + 1))} />
    </Styles.Wrapper>
  )
}
