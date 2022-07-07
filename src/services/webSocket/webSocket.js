import { debounce } from 'lodash'
export const debSendToSocket = debounce(sendToSocket, 200)
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

function sendToSocket(socket) {
  console.log('socket obj', debounceObj.entities)
  socket.send(JSON.stringify(debounceObj.entities))
  debounceObj.entities = {}
}

export function startSocket(store, lobbyId) {
  const ws = new WebSocket(`ws://26.195.134.149:8000/ws/${lobbyId}/`)
  console.log(ws)
  ws.onopen = function () {
    debounceObj.prevValues = store.getState().alias
    store.subscribe(() => {
      if (debounceObj.running) {
        let prevValues = debounceObj.prevValues
        let currentValues = store.getState().alias
        debounceObj.prevValues = currentValues
        for (let key in currentValues) {
          if (!_.isEqual(prevValues[key], currentValues[key])) {
            debounceObj.entities[key] = currentValues[key]
          }
        }
        if (store.getState().alias.status === 'game') {
          sendToSocket(ws)
        } else {
          debSendToSocket(ws)
        }
      }
      debounceObj.running = true
    })
  }
  ws.onmessage = function (event) {
    const data = JSON.parse(event.data).data
    console.log('msg', data)
    if (typeof data === 'object') {
      debounceObj.running = false
      if (data.wordsSettled) {
        store.dispatch(changeFields({ ...data, status: 'endRound' }))
      } else {
        store.dispatch(changeFields(data))
      }
    }
  }
}
