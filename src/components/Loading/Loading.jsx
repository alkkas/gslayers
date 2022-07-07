import React from 'react'
import * as Styles from './Loading.styles'
import loadingSrc from '@assets/img/loading.png'

export default function Loading() {
  return (
    <Styles.LoadingContainer>
      <Styles.LoadingImg
        src={loadingSrc}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 0.2,
        }}
      />
    </Styles.LoadingContainer>
  )
}
