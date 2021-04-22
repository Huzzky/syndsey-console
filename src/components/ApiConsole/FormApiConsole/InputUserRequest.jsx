import PropTypes from 'prop-types'
import { useState } from 'react'
import { connect } from 'react-redux'
import { userWroteJSONRequest } from '../../../store/actions/userWroteJSONRequest'
import { parseToJSON } from '../../../utils/parseJSON'

const InputUserRequest = ({ userWroteJSONRequest, JSONFromUser }) => {
  const [valueInput, setValueInput] = useState('')
  return (
    <div className="forms-api-console__input--container">
      <label className="forms-api-console__textarea-label">Запрос:</label>
      <textarea
        className="forms-api-console__input-textarea"
        onChange={(e) => {
          setValueInput(e.currentTarget.value)

          userWroteJSONRequest(parseToJSON(e.currentTarget.value))
        }}
        value={valueInput}
      />
    </div>
  )
}

InputUserRequest.propTypes = {
  userWroteJSONRequest: PropTypes.func,
}

const mapToStateProp = ({ userOperationsReducer }) => ({
  JSONFromUser: userOperationsReducer.JSONFromUser,
})

const mapDispatchToProps = (dispatch) => ({
  userWroteJSONRequest: (JSONFromUserInput) =>
    dispatch(userWroteJSONRequest(JSONFromUserInput)),
})

export default connect(mapToStateProp, mapDispatchToProps)(InputUserRequest)
