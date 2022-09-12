import { modes } from './alias.model'

interface pointsChange {
  type: 'pointsChange'
  payload: number
}
interface timeChange {
  type: 'timeChange'
  payload: number
}
interface modeChange {
  type: 'modeChange'
  payload: modes
}

type SocketData = pointsChange | timeChange | modeChange

export default SocketData
