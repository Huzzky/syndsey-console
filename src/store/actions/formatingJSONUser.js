import { USER_FORMATING_JSON } from '../../const'

const formatingJSONUser = (JSONUser) => {
  return (dispatch) => {
    console.log(typeof JSON.stringify(JSONUser, null, '\t'))
    try {
      dispatch({
        type: USER_FORMATING_JSON,
        answerFromServerWithJSON: JSON.stringify(JSONUser, null, '\t'),
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
