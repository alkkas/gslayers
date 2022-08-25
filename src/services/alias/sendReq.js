import { useDispatch } from 'react-redux'
import { statusChange } from '@store/alias/mainSlice'
import { store } from '@store/store'

export async function sendReq(url, data, method = 'POST') {
  try {
    let result = await fetch(url, {
      method: method,
      mode: 'cors',
      body: JSON.stringify(data),
    })
    if (result.status === 200) {
      result = await result.json()
      return result
    }
    console.log('asdf')
  } catch (error) {
    console.log('error')

    store.dispatch(statusChange('error'))
  }
}

export async function getData(link) {
  try {
    let result = await fetch(link)

    if (result.status === 200) {
      result = await result.json()
      return result
    }
  } catch (error) {
    store.dispatch(statusChange('error'))
  }
}
