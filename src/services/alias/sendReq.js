import { useDispatch } from 'react-redux'
import { statusChange } from '@store/alias/aliasSlice'
import { store } from '@store/store'

export async function sendReq(url, data, method = 'POST') {
  let result = await fetch(url, {
    method: method,
    mode: 'cors',
    body: JSON.stringify(data),
  })
  if (result.status != 404) {
    result = await result.json()
    return result
  }
  store.dispatch(statusChange('error'))
}

export async function getData(link) {
  let result = await fetch(link)
  if (result.status != 404) {
    result = await result.json()
    return result
  }
  return 'error'
}
