import { connect } from 'react-redux'

const OutputUserRequest = ({ answerFromServerJSON }) => {
  console.log()
  return (
    <div className="forms-api-console__output--container">
      <label className="forms-api-console__textarea-label">Ответ:</label>
      <textarea
        disabled="disabled"
        className="forms-api-console__output-textarea"
        value={
          answerFromServerJSON[0]
            ? typeof answerFromServerJSON[0] === 'string'
              ? answerFromServerJSON[0]
              : JSON.stringify(answerFromServerJSON[0])
            : ''
        }
      />
    </div>
  )
}

const mapStateToProps = ({ userOperationsReducer }) => ({
  answerFromServerJSON: userOperationsReducer.answerFromServerWithJSON,
})

export default connect(mapStateToProps)(OutputUserRequest)
