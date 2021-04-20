import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userWroteJSONRequest } from '../../../store/actions/userWroteJSONRequest'
import { parseToJSON } from '../../../utils/parseToJSON'

const InputUserRequest = ({ userWroteJSONRequest }) => {
  return (
    <div className="forms-api-console__input--container">
      <label className="forms-api-console__textarea-label">Запрос:</label>
      <textarea
        className="forms-api-console__input-textarea"
        onChange={(e) => {
          userWroteJSONRequest(parseToJSON(e.currentTarget.value))
        }}
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
