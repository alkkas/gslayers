import React from 'react'
import * as Styles from './MenuDesktop.styles'

export default function MenuDesktop() {
  return (
    <Styles.Wrapper>
      <Styles.Items>
        <Styles.Item to="/">HOME</Styles.Item>
        <Styles.Item to="/">OUR GAMES</Styles.Item>
        <Styles.Item to="/">CREDENTIALS</Styles.Item>
      </Styles.Items>
    </Styles.Wrapper>
  )
}
