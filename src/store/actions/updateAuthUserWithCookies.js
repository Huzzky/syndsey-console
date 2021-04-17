import { UPDATE_AUTH_USER } from '../../const'

const updateAuthUserWithCookies = () => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_AUTH_USER,
    })
  }
}

export { updateAuthUserWithCookies }
