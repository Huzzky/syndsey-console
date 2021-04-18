import { connect } from 'react-redux'

const OutputUserRequest = ({ answerFromServerJSON }) => {
  console.log()
  return (
    <div className="forms-api-console__output--container">
      <label className="forms-api-console__textarea-label">Ответ:</label>
      <textarea
        disabled="disabled"
        className="forms-api-console__output-textarea"
        value={JSON.stringify(answerFromServerJSON[0], null, '\t')}
      />
    </div>
  )
}

const mapStateToProps = ({ userOperationsReducer }) => ({
  answerFromServerJSON: userOperationsReducer.answerFromServerWithJSON,
})

export default connect(mapStateToProps)(OutputUserRequest)
