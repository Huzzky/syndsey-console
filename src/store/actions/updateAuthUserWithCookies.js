import { UPDATE_AUTH_USER } from '../../const'
import { requestToUserRequestInCookies } from '../cookies/userHistoryRequest'

const updateAuthUserWithCookies = () => {
  return (dispatch) => {
    let reqHistory = requestToUserRequestInCookies()
    dispatch({
      type: UPDATE_AUTH_USER,
      reqHistory: reqHistory,
    })
  }
}

export { updateAuthUserWithCookies }
