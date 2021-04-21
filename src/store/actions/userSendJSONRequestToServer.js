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

    try {
      sendToServerRequest(userOperationRequestToServer)
        .then((res) => {
          if (res[0] === 'Error connection') {
            dispatch({
              type: USER_SEND_OPERATION_JSON_ERROR,
              answerFromServerWithJSON: res[0],
            })
          } else {
            dispatch({
              type: USER_SEND_OPERATION_JSON_SUCCESS,
              answerFromServerWithJSON: res[0],
            })
          }
        })
        .catch((errorAuth) => {
          dispatch({
            type: USER_SEND_OPERATION_JSON_ERROR,
            answerFromServerWithJSON: errorAuth,
          })
        })
    } catch {
      dispatch({
        type: USER_SEND_OPERATION_JSON_ERROR,
        answerFromServerWithJSON: {
          error: 'Unknown error. Please, reload web-site',
        },
      })
    }
  }
}

export { userSendJSONRequestToServer }
