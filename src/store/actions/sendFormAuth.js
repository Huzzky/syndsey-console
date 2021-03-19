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
      passwordNullOrHaveText,
      subloginNullOrHaveText,
    )
      .then((res) => {
        dispatch({
          type: SUCCESS_AUTH_USER,
          login_user: res.list['about.name'],
        })
      })
      .catch((e) => {
        console.log(e.explain)
        dispatch({
          type: ERROR_AUTH_USER,
        })
      })
  }
}

export { sendFormDataForAuth }
