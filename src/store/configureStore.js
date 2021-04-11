import { combineReducers } from 'redux'
import { formAuthReducer } from './reducers/formAuthReducer'
import { userActionsReducer } from './reducers/userActionsReducer'

export const allReducers = combineReducers({
  formAuthReducer,
  userActionsReducer,
})
