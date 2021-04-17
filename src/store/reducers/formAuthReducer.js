import {
  ERROR_AUTH_USER,
  REQUEST_AUTH_USER,
  SUCCESS_AUTH_USER,
} from '../../const'
import { userSetCookies } from '../cookies/userCookies'

const initialState = {
  isLoading: false,
  errorAuth: {},
}

export const formAuthReducer = (
  state = initialState,
  { type, account_user, sublogin_user, errorAuth, apiKey },
) => {
  switch (type) {
    case REQUEST_AUTH_USER:
      return {
        ...state,
        isLoading: true,
      }
    case SUCCESS_AUTH_USER:
      userSetCookies(account_user, sublogin_user, apiKey)
      return {
        ...state,
        isLoading: false,
        errorAuth: {},
      }
    case ERROR_AUTH_USER:
      return {
        ...state,
        isLoading: false,
        errorAuth:
          errorAuth.message === 'Failed to fetch'
            ? { explain: 'Connection Error' }
            : errorAuth.message === 'option expires is invalid'
            ? { explain: 'Unknown Error. Please contact with support.' }
            : errorAuth,
      }
    default:
      return state
  }
}
