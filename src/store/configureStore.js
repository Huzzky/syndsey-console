import { combineReducers } from 'redux'
import { formAuthReducer } from './reducers/formAuthReducer'

export const allReducers = combineReducers({
  formAuthReducer,
})
