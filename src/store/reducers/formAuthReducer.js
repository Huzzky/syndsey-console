import { REQUEST_AUTH_USER, SUCCESS_AUTH_USER } from '../../const'
import Cookies from 'universal-cookie'

const initialState = {
  login: '',
  password: '',
  sublogin: '',
  isLoading: false,
}

export const formAuthReducer = (state = initialState, { type, formData }) => {
  switch (type) {
    case REQUEST_AUTH_USER:
      return {
        ...state,
        isLoading: true,
      }
    case SUCCESS_AUTH_USER:
      const cookies = new Cookies()
      cookies.set(
        'user',
        {
          user: {
            email: formData.loginNullOrHaveText,
            dateAuth: new Date().now(),
          },
        },
        { path: 'api-console' },
      )
      return {
        ...state,
        isLoading: false,
        login: formData.loginNullOrHaveText,
        password: formData.passwordNullOrHaveText,
        sublogin: formData.subloginNullOrHaveText,
      }
    default:
      return state
  }
}
