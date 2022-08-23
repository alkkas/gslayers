import aliasSlice from './alias/aliasSlice'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({ alias: aliasSlice })
export default rootReducer
// This would produce the following state object
