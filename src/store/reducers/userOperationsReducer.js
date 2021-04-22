import {
  USER_SEND_OPERATION_JSON_REQUEST,
  USER_SEND_OPERATION_JSON_SUCCESS,
  USER_SEND_OPERATION_JSON_ERROR,
  USER_NORMALIZATED_JSON_SUCCESS,
  USER_FORMATING_JSON,
} from '../../const'
import { writeUserRequestInCookies } from '../cookies/userHistoryRequest'

const initialState = {
  isLoading: false,
  isError: false,
  answerFromServerWithJSON: [''],
  JSONFromUser: [''],
}

export const userOperationsReducer = (
  state = initialState,
  { type, answerFromServerWithJSON, JSONFromUser },
) => {
  switch (type) {
    case USER_NORMALIZATED_JSON_SUCCESS:
      return {
        ...state,
        JSONFromUser: [JSONFromUser],
      }
    case USER_SEND_OPERATION_JSON_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case USER_SEND_OPERATION_JSON_SUCCESS:
      writeUserRequestInCookies({}, state.JSONFromUser, true)

      return {
        ...state,
        isError: false,
        isLoading: false,
        answerFromServerWithJSON: [answerFromServerWithJSON],
      }
    case USER_SEND_OPERATION_JSON_ERROR:
      writeUserRequestInCookies(
        answerFromServerWithJSON,
        state.JSONFromUser,
        state.isError,
      )
      return {
        ...state,
        isError: true,
        isLoading: false,
        answerFromServerWithJSON: [answerFromServerWithJSON],
      }
    case USER_FORMATING_JSON: {
      return {
        ...state,
        answerFromServerWithJSON: [answerFromServerWithJSON],
      }
    }
    default:
      return state
  }
}
