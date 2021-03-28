import {
  ERROR_AUTH_USER,
  REQUEST_AUTH_USER,
  SUCCESS_AUTH_USER,
} from '../../const'
import { userSetCookies } from '../cookies/userCookies'

const initialState = {
  isLoading: false,
  errorAuth: {},
  userAuthSucces: false,
}

export const formAuthReducer = (
  state = initialState,
  { type, login_user, errorAuth },
) => {
  switch (type) {
    case REQUEST_AUTH_USER:
      return {
        ...state,
        isLoading: true,
      }
    case SUCCESS_AUTH_USER:
      userSetCookies(login_user)
      return {
        ...state,
        isLoading: false,
        errorAuth: {},
        userAuthSucces: true,
      }
    case ERROR_AUTH_USER:
      console.log(errorAuth.message)
      return {
        ...state,
        isLoading: false,
        errorAuth:
          errorAuth.message === 'Failed to fetch'
            ? { explain: 'Connection Error' }
            : errorAuth,
      }
    default:
      return state
  }
}
