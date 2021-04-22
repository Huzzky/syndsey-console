import { USER_FORMATING_JSON } from '../../const'

const formatingJSONUser = (serverJSON, userJSON) => {
  return (dispatch) => {
    try {
      dispatch({
        type: USER_FORMATING_JSON,
        answerFromServerWithJSON: JSON.stringify(serverJSON, null, '\t'),
        JSONFromUser: JSON.stringify(userJSON, null, '\t'),
      })
    } catch {
      dispatch({
        type: USER_FORMATING_JSON,
        answerFromServerWithJSON: '',
      })
    }
  }
}

export { formatingJSONUser }
