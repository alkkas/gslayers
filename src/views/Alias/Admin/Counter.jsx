import React, { useState } from 'react'
import * as Styles from './Admin.styles'

export default function Counter({ initial }) {
  const [value, setValue] = useState(initial)
  return (
    <Styles.Wrapper>
      <Styles.MinusButton onClick={() => setValue(value => --value)} />
      <span>{value}</span>
      <Styles.PlusButton onClick={() => setValue(value => ++value)} />
    </Styles.Wrapper>
  )
}
