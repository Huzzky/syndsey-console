import {
  ERROR_AUTH_USER,
  REQUEST_AUTH_USER,
  SUCCESS_AUTH_USER,
} from '../../const'
// import { userSetCookies } from '../cookies/userCookies'

const initialState = {
  isLoading: false,
  isError: true,
}

export const formAuthReducer = (state = initialState, { type, login_user }) => {
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
        isError: false,
      }
    case ERROR_AUTH_USER:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}
