import { EXIT_USER_FROM_ACCOUNT, SUCCESS_AUTH_USER } from '../../const'

const initialState = {
  userAuthSucces: false,
}

export const userActionsReducer = (state = initialState, { type }) => {
  switch (type) {
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
