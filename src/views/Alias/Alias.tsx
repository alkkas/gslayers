import React from 'react'
import { useIsLoggedInQuery } from '@store/api/apiSlice'
import AliasGame from '@views/Alias/AliasGame'
import AliasLogin from '@views/Alias/AliasLogin'

export default function Alias() {
  const { data, isLoading, isSuccess, isError, error } = useIsLoggedInQuery()

  return <>{isSuccess && (data.isLoggedIn ? <AliasGame /> : <AliasLogin />)}</>
}
