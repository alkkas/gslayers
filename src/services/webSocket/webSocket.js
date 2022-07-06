import { debounce } from 'lodash'
export const debSendToSocket = debounce(sendToSocket, 500)
import {
  changeFields,
  statusChange,
  sessionChange,
  wordsSettled,
} from '@store/alias/aliasSlice'

export const debounceObj = {
  entities: {},
  prevValues: {},
  running: true,
}

function sendToSocket(obj, socket) {
  console.log('socket obj', obj)
  socket.send(JSON.stringify(obj))
  obj = {}
}

export function startSocket(store, lobbyId) {
  const ws = new WebSocket(`ws://26.71.3.113:8000/ws/${lobbyId}/`)
  console.log(ws)
  ws.onopen = function () {
    debounceObj.prevValues = store.getState().alias
    store.subscribe(() => {
      console.log('starts', debounceObj.running)
      if (debounceObj.running) {
        let prevValues = debounceObj.prevValues
        let currentValues = store.getState().alias
        debounceObj.prevValues = currentValues
        for (let key in currentValues) {
          if (!_.isEqual(prevValues[key], currentValues[key])) {
            debounceObj.entities[key] = currentValues[key]
          }
        }

        debSendToSocket(debounceObj.entities, ws)
      }
      debounceObj.running = true
      console.log('end', debounceObj.running)
    })
  }
  ws.onmessage = function (event) {
    console.log('msg')
    const data = JSON.parse(event.data).data
    if (typeof data === 'object') {
      debounceObj.running = false
      if (data.type === 'preGame') {
        store.dispatch(changeFields(data))
      } else if (data.type === 'status') {
        store.dispatch(statusChange(data.status))
      } else if (data.type === 'game') {
        store.dispatch(sessionChange(data.session))
      } else if (data.type === 'wordsFetched') {
        store.dispatch(wordsSettled())
      }
    }
  }
}
