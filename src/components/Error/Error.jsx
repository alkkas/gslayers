import React from 'react'
import * as Styles from './Error.styles'

export default function Error({ info }) {
  return (
    <>
      <Styles.ErrorContainer>
        <Styles.Text>
          {info}
          {String.fromCodePoint(0x1f614)}
        </Styles.Text>
      </Styles.ErrorContainer>
    </>
  )
}
