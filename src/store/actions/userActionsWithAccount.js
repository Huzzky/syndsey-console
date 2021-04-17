import { logoutUserAndDeleteAPIKey } from '../../api/requestToServer'
import {
  EXIT_USER_FROM_ACCOUNT_REQUEST,
  EXIT_USER_FROM_ACCOUNT_SUCCESS,
  EXIT_USER_FROM_ACCOUNT_ERROR,
} from '../../const'

const userActionsWithAccount = () => {
  return (dispatch) => {
    dispatch({
      type: EXIT_USER_FROM_ACCOUNT_REQUEST,
    })

    logoutUserAndDeleteAPIKey().then((result) => {
      if (result[0] === 'Complete delete') {
        dispatch({
          type: EXIT_USER_FROM_ACCOUNT_SUCCESS,
        })
      } else if (result[0] === 'Error connection') {
        dispatch({
          type: EXIT_USER_FROM_ACCOUNT_ERROR,
        })
      }
    })
  }
}

export { userActionsWithAccount }
