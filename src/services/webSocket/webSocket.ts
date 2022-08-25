import { debounce } from 'lodash'
export const debSendToSocket = debounce(sendToSocket, 200)
import {
  changeFields,
  statusChange,
  sessionChange,
  wordsSettled,
} from '@store/alias/mainSlice'
import { isEmpty } from 'lodash'

export const debounceObj = {
  entities: {},
  prevValues: {},
  running: true,
}

function sendToSocket(socket) {
  console.log('socket obj', debounceObj.entities)
  if (!isEmpty(debounceObj.entities)) {
    socket.send(JSON.stringify(debounceObj.entities))
  }
  debounceObj.entities = {}
}

export function startSocket(store, lobbyId) {
  const ws = new WebSocket(
    `wss://api.gslayers.ru/ws/${lobbyId}_${
      store.getState().alias.currentPlayer
    }/`
  )
  console.log(ws)
  ws.onopen = function () {
    debounceObj.prevValues = store.getState().alias
    store.subscribe(() => {
      if (debounceObj.running) {
        let prevValues = debounceObj.prevValues
        let currentValues = store.getState().alias
        debounceObj.prevValues = currentValues

        for (let key in currentValues) {
          if (
            !_.isEqual(prevValues[key], currentValues[key]) &&
            key !== 'wordsSettled' &&
            key !== 'words'
          ) {
            debounceObj.entities[key] = currentValues[key]
          }
        }
        sendToSocket(ws)
      }
      debounceObj.running = true
    })
  }
  ws.onmessage = function (event) {
    const data = JSON.parse(event.data).data
    console.log('msg', data)
    if (typeof data === 'object') {
      debounceObj.running = false
      store.dispatch(changeFields(data))

      if (data.wordsSettled) {
        store.dispatch(statusChange('endRound'))
      }
    }
  }
}

let socket: WebSocket

export function getSocket(lobbyId?: string, currentPlayer?: string): WebSocket {
  if (!socket) {
    socket = new WebSocket(
      `wss://api.gslayers.ru/ws/${lobbyId}_${currentPlayer}/`
    )
  }
  return socket
}
