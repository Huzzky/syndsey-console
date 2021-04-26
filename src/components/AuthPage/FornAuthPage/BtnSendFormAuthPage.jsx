import PropTypes from 'prop-types'
import '../../../assets/_animation.scss'
import { AnimationLoader } from '../../Core/AnimationLoader'
import { connect } from 'react-redux'
import { sendFormDataForAuth } from '../../../store/actions/sendFormAuth'
import { memo } from 'react'

const BtnSendFormAuthPage = ({ formCheck, isLoading, sendFormDataForAuth }) => {
  let sendFormAuthPage = (e, form) => {
    e.preventDefault()
    sendFormDataForAuth(form)
  }
  return !isLoading ? (
    <button
      onClick={(e) => {
        sendFormAuthPage(e, formCheck)
      }}
      className={
        'form-auth__form__button-send' +
        (formCheck.loginNullOrHaveText === '' ||
        formCheck.passwordNullOrHaveText === ''
          ? '--disabled'
          : '')
      }
      type="submit"
      disabled={
        formCheck.loginNullOrHaveText === '' ||
        formCheck.passwordNullOrHaveText === ''
          ? 'disabled'
          : ''
      }
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
  // formCheck: PropTypes.shape({
  //   loginNullOrHaveText: PropTypes.string,
  //   passwordNullOrHaveText: PropTypes.string,
  // }),
  isLoading: PropTypes.bool,
  sendFormDataForAuth: PropTypes.func,
}

const mapStateToProps = ({ formAuthReducer }) => ({
  isLoading: formAuthReducer.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
  sendFormDataForAuth: (formData) => dispatch(sendFormDataForAuth(formData)),
})

export default memo(
  connect(mapStateToProps, mapDispatchToProps)(BtnSendFormAuthPage),
)
