import { sendToServerRequest } from '../../api/requestToServer'
import {
  USER_SEND_OPERATION_JSON_REQUEST,
  USER_SEND_OPERATION_JSON_SUCCESS,
  USER_SEND_OPERATION_JSON_ERROR,
} from '../../const'

const userSendJSONRequestToServer = (userOperationRequestToServer) => {
  return (dispatch) => {
    dispatch({
      type: USER_SEND_OPERATION_JSON_REQUEST,
    })

    sendToServerRequest()
      .then((res) => {
        if (res[0] === 'Error connection') {
          dispatch({
            type: USER_SEND_OPERATION_JSON_ERROR,
          })
        } else {
          dispatch({
            type: USER_SEND_OPERATION_JSON_SUCCESS,
            answerFromServerWithJSON: userOperationRequestToServer,
          })
        }
      })
      .catch((errorAuth) => {
        dispatch({
          type: USER_SEND_OPERATION_JSON_ERROR,
        })
      })
  }
}

export { userSendJSONRequestToServer }
