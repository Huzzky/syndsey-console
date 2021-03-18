import { REQUEST_AUTH_USER, SUCCESS_AUTH_USER } from '../../const'

const initialState = {
  login: '',
  password: '',
  sublogin: '',
  isLoading: false,
}

export default function formAuthReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_AUTH_USER:
      return {
        ...state,
        isLoading: true,
      }
    case SUCCESS_AUTH_USER:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}
