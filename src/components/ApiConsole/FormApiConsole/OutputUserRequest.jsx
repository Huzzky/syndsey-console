import { connect } from 'react-redux'

const OutputUserRequest = ({ answerFromServerJSON }) => {
  let valueSetOutput = (answerFromServerJSON) => {
    return answerFromServerJSON
      ? typeof answerFromServerJSON === 'string'
        ? answerFromServerJSON
        : JSON.stringify(answerFromServerJSON)
      : ''
  }

  return (
    <div className="forms-api-console__output--container">
      <label className="forms-api-console__textarea-label">Ответ:</label>
      <textarea
        disabled="disabled"
        className="forms-api-console__output-textarea"
        value={valueSetOutput(answerFromServerJSON[0])}
      />
    </div>
  )
}

const mapStateToProps = ({ userOperationsReducer }) => ({
  answerFromServerJSON: userOperationsReducer.answerFromServerWithJSON,
})

export default connect(mapStateToProps)(OutputUserRequest)
