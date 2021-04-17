import {
  CHOICE_REQUEST_IN_HISTORY_COMPONENT,
  EXIT_USER_FROM_ACCOUNT,
  SUCCESS_AUTH_USER,
} from '../../const'

const initialState = {
  userAuthSucces: false,
  choiceRequestInHistory: -1,
}

export const userActionsReducer = (
  state = initialState,
  { type, choiceRequestInHistory },
) => {
  switch (type) {
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
    case EXIT_USER_FROM_ACCOUNT:
      return {
        ...state,
        userAuthSucces: false,
      }
    default:
      return state
  }
}
