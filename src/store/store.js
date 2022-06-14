import { configureStore } from '@reduxjs/toolkit'

import aliasReducer from './alias/aliasSlice'
import { aliasAdapter } from './alias/aliasSlice'

export const store = configureStore({
  reducer: {
    alias: aliasReducer,
  },
})
