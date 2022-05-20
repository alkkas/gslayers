import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Loading } from '@components'
import * as Styles from './Alias.styles'
export default function Alias() {
  //not working function
  let [searchParams, setSearchParams] = useSearchParams()
  let [status, setStatus] = useState('loading')
  useEffect(() => {
    if (searchParams.get('key')) {
    }
  })
  return (
    <Styles.AliasWrapper>
      <Styles.AliasTitle>
        <span>ALIAS </span>
        <span>under the hedge</span>
      </Styles.AliasTitle>
      {status === 'loading' ? <Loading /> : null}
    </Styles.AliasWrapper>
  )
}
