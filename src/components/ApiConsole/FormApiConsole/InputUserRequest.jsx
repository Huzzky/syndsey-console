import PropTypes from 'prop-types'
import { useState } from 'react'
import { connect } from 'react-redux'
import { userWroteJSONRequest } from '../../../store/actions/userWroteJSONRequest'
import { parseToJSON } from '../../../utils/parseJSON'

const InputUserRequest = ({ userWroteJSONRequest }) => {
  const [valueInput, setValueInput] = useState('')

  let formatInput = (e) => {
    try {
      setValueInput(
        JSON.stringify(JSON.parse(e.currentTarget.value), null, '    '),
      )
    } catch {
      setValueInput(e.currentTarget.value)
    }
    userWroteJSONRequest(parseToJSON(e.currentTarget.value))
  }

  return (
    <div className="forms-api-console__input--container">
      <label className="forms-api-console__textarea-label">Запрос:</label>
      <textarea
        className="forms-api-console__input-textarea"
        onChange={(e) => {
          formatInput(e)
        }}
        value={valueInput}
      />
    </div>
  )
}

InputUserRequest.propTypes = {
  userWroteJSONRequest: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  userWroteJSONRequest: (JSONFromUserInput) =>
    dispatch(userWroteJSONRequest(JSONFromUserInput)),
})

export default connect(null, mapDispatchToProps)(InputUserRequest)
