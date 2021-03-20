import {
  ERROR_AUTH_USER,
  REQUEST_AUTH_USER,
  SUCCESS_AUTH_USER,
} from '../../const'
// import { userSetCookies } from '../cookies/userCookies'

const initialState = {
  isLoading: false,
  errorAuth: {},
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
      // userSetCookies(login_user)
      return {
        ...state,
        isLoading: false,
        errorAuth: {},
      }
    case ERROR_AUTH_USER:
      return {
        ...state,
        isLoading: false,
        errorAuth: errorAuth,
      }
    default:
      return state
  }
}
