import { requestToServerForAuth } from '../../api/requestTest'
import {
  REQUEST_AUTH_USER,
  SUCCESS_AUTH_USER,
  ERROR_AUTH_USER,
} from '../../const'

const sendFormDataForAuth = ({
  loginNullOrHaveText,
  subloginNullOrHaveText,
  passwordNullOrHaveText,
}) => {
  return (dispatch) => {
    dispatch({
      type: REQUEST_AUTH_USER,
    })

    requestToServerForAuth(
      loginNullOrHaveText,
      subloginNullOrHaveText,
      passwordNullOrHaveText,
    )
      .then((res) => {
        if (res[0] === 'Error connection') {
          dispatch({
            type: ERROR_AUTH_USER,
            errorAuth: { explain: res[0] },
          })
        } else {
          dispatch({
            type: SUCCESS_AUTH_USER,
            account_user: res[0],
            sublogin_user: res[1],
          })
        }
      })
      .catch((errorAuth) => {
        dispatch({
          type: ERROR_AUTH_USER,
          errorAuth: errorAuth,
        })
      })
  }
}

export { sendFormDataForAuth }
