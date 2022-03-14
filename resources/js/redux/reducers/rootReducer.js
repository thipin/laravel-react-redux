import { combineReducers } from 'redux'

import numberReducer from './number'
import chatReducer from './main/chat.reducer'
import loadpageReducer from './main/loadpage.reducer'


const rootReducer = combineReducers({
  numberReducer,
  chatReducer,
  loadpageReducer,
})

export default rootReducer
