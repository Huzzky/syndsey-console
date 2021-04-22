import {
  CHOICE_REQUEST_IN_HISTORY_COMPONENT,
  EXIT_USER_FROM_ACCOUNT_ERROR,
  EXIT_USER_FROM_ACCOUNT_REQUEST,
  EXIT_USER_FROM_ACCOUNT_SUCCESS,
  SUCCESS_AUTH_USER,
  UPDATE_AUTH_USER,
  UPDATE_HISTORY_REQUEST_USER,
} from '../../const'
import { RequestCookieUserForAuth } from '../cookies/userCookies'

const initialState = {
  userAuthSucces: false,
  choiceRequestInHistory: -1,
  isLoading: false,
  reqHistory: [],
}

export const userActionsReducer = (
  state = initialState,
  { type, choiceRequestInHistory, reqHistory },
) => {
  switch (type) {
    case UPDATE_HISTORY_REQUEST_USER:
      return {
        ...state,
        reqHistory: reqHistory,
      }
    case UPDATE_AUTH_USER:
      return {
        ...state,
        userAuthSucces: true,
        reqHistory: reqHistory,
      }
    case CHOICE_REQUEST_IN_HISTORY_COMPONENT:
      return {
        ...state,
        choiceRequestInHistory: choiceRequestInHistory,
      }
    case SUCCESS_AUTH_USER:
      return {
        ...state,
        userAuthSucces: true,
      }
    case EXIT_USER_FROM_ACCOUNT_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case EXIT_USER_FROM_ACCOUNT_SUCCESS:
      console.log(RequestCookieUserForAuth())
      return {
        ...state,
        isLoading: false,
        userAuthSucces: false,
      }
    case EXIT_USER_FROM_ACCOUNT_ERROR:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}
