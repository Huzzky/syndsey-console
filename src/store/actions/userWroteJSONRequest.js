import {USER_NORMALIZATED_JSON_SUCCESS  } from '../../const'

const userWroteJSONRequest = (JSONFromUserInput) => {
  return (dispatch) => {
    dispatch({
      type: USER_NORMALIZATED_JSON_SUCCESS,
      JSONFromUser:JSONFromUserInput
    })
  }
}

export { userWroteJSONRequest }
