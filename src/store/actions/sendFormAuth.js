import { REQUEST_AUTH_USER, SUCCESS_AUTH_USER } from '../../const'

const sendFormDataForAuth = (formData) => {
  return (dispatch) => {
    dispatch({
      type: REQUEST_AUTH_USER,
    })
    setTimeout(() => {
      dispatch({
        type: SUCCESS_AUTH_USER,
        formData: formData,
      })
    }, 3000)
  }
}

export { sendFormDataForAuth }
