import { DELETE_HISTORY_REQUEST_USER } from '../../const'
import { removeUserRequestInCookies } from '../cookies/userHistoryRequest'

const userDeletingCookiesWithRequests = () => {
  return (dispatch) => {
    removeUserRequestInCookies().then(() => {
      dispatch({
        type: DELETE_HISTORY_REQUEST_USER,
      })
    })
  }
}

export { userDeletingCookiesWithRequests }
