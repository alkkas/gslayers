import { configureStore } from '@reduxjs/toolkit'

import aliasReducer from './alias/aliasSlice'
import { aliasAdapter } from './alias/aliasSlice'

const players = {
  12314234: {
    id: '12314234',
    status: 'available',
    team: '',
  },
  2342342: {
    id: '2342342',
    status: 'player',
    team: 'name2',
  },
  1231423234: {
    id: '1231423234',
    status: 'available',
    team: '',
  },
  2342552342: {
    id: '2342552342',
    status: 'player',
    team: 'name2',
  },
}
export const store = configureStore({
  reducer: {
    alias: aliasReducer,
  },
})

aliasAdapter.setAll(store.getState().alias, players)
