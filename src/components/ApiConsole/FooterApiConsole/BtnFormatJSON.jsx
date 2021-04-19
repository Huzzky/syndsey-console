import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { formatingJSONUser } from '../../../store/actions/formatingJSONUser'

const BtnFormatJSON = ({ formatJSON, answerFromServerWithJSON }) => {
  return (
    <div
      className="footer__btn-format-json"
      onClick={() => {
        formatJSON(answerFromServerWithJSON[0])
      }}
    >
      <div className="footer__btn-format-json__logo">
        <div className="footer__btn-format-json__logo--1"></div>
        <div className="footer__btn-format-json__logo--2"></div>
        <div className="footer__btn-format-json__logo--3"></div>
        <div className="footer__btn-format-json__logo--4"></div>
      </div>
      <p className="footer__btn-format-json__p?__">Форматировать</p>
    </div>
  )
}

BtnFormatJSON.propTypes = {
  JSONFromUser: PropTypes.array,
  formatJSON: PropTypes.func,
}

const mapStateToProps = ({ userOperationsReducer }) => ({
  answerFromServerWithJSON: userOperationsReducer.answerFromServerWithJSON,
})

const mapDispatchToProps = (dispatch) => ({
  formatJSON: (JSONUser) => dispatch(formatingJSONUser(JSONUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BtnFormatJSON)
