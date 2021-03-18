import PropTypes from 'prop-types'
import '../../../assets/_animation.scss'
import { AnimationLoader } from '../../Core/AnimationLoader'
import { connect } from 'react-redux'
import { sendFormDataForAuth } from '../../../store/actions/sendFormAuth'

const BtnSendFormAuthPage = ({ formCheck, isLoading, sendFormDataForAuth }) => {
  return !isLoading ? (
    <button
      onClick={(e) => {
        e.preventDefault()
        sendFormDataForAuth(formCheck)
      }}
      className={
        'form-auth__form__button-send' +
        (formCheck.loginNullOrHaveText === '' ||
        formCheck.passwordNullOrHaveText === ''
          ? '--disabled'
          : '')
      }
      type="submit"
      disabled={formCheck.loginNullOrHaveText === '' ? 'disabled' : ''}
    >
      Войти
    </button>
  ) : (
    <div className="form-auth__form__button-send">
      <AnimationLoader />
    </div>
  )
}

BtnSendFormAuthPage.propTypes = {
  formCheck: PropTypes.shape({
    loginNullOrHaveText: PropTypes.string,
    passwordNullOrHaveText: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
  sendFormDataForAuth: PropTypes.func,
}

const mapStateToProps = ({ formAuthReducer }) => ({
  isLoading: formAuthReducer.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
  sendFormDataForAuth: (formData) => dispatch(sendFormDataForAuth(formData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BtnSendFormAuthPage)
