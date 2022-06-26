import { ReactSession } from 'react-client-session'

export function getValue(name) {
  return ReactSession.get(name)
}
export function setValues(obj) {
  Object.entries(obj).forEach(([value, items]) => {
    ReactSession.set(value, items)
  })
}
