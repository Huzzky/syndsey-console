import { combineReducers } from 'redux'
import { formAuthReducer } from './reducers/formAuthReducer'
import { userActionsReducer } from './reducers/userActionsReducer'
import { userOperationsReducer } from './reducers/userOperationsReducer'

export const allReducers = combineReducers({
  formAuthReducer,
  userOperationsReducer,
  userActionsReducer,
})
