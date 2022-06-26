import { v4 as uuidv4 } from 'uuid'
import { getValue } from '@services/localStorage'
export default function createPlayer() {
  return {
    id: uuidv4(),
    team: null,
    name: getValue('name'),
  }
}
