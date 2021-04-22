import { sendToServerRequest } from '../../api/requestToServer'
import {
  USER_SEND_OPERATION_JSON_REQUEST,
  USER_SEND_OPERATION_JSON_SUCCESS,
  USER_SEND_OPERATION_JSON_ERROR,
  UPDATE_HISTORY_REQUEST_USER,
} from '../../const'
import { requestToUserRequestInCookies } from '../cookies/userHistoryRequest'

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
            if (typeof res[0]['error'] !== 'object') {
              dispatch({
                type: USER_SEND_OPERATION_JSON_SUCCESS,
                answerFromServerWithJSON: res[0],
              })
              let reqHistory = requestToUserRequestInCookies()

              dispatch({
                type: UPDATE_HISTORY_REQUEST_USER,
                reqHistory: reqHistory,
              })
            } else {
              dispatch({
                type: USER_SEND_OPERATION_JSON_ERROR,
                answerFromServerWithJSON: res[0],
              })
              let reqHistory = requestToUserRequestInCookies()

              dispatch({
                type: UPDATE_HISTORY_REQUEST_USER,
                reqHistory: reqHistory,
              })
            }
          }
        })
        .catch((errorAuth) => {
          dispatch({
            type: USER_SEND_OPERATION_JSON_ERROR,
            answerFromServerWithJSON: errorAuth,
          })
          let reqHistory = requestToUserRequestInCookies()

          dispatch({
            type: UPDATE_HISTORY_REQUEST_USER,
            reqHistory: reqHistory,
          })
        })
    } catch {
      console.log(678)

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
