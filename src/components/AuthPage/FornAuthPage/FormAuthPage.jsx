import PropTypes from 'prop-types'
import { useState } from 'react'
import { connect } from 'react-redux'
import BtnSendFormAuthPage from './BtnSendFormAuthPage'
import { ErrorMessageFormAuth } from './ErrorMessageFormAuth'
import { LoginAuthInput } from './LoginAuthInput'
import { PasswordAuthInput } from './PasswordAuthInput'
import { SubloginAuthInput } from './SubloginAuthInput'

const FormAuthPage = ({ errorAuth }) => {
  const [loginNullOrHaveText, setLoginNullOrHaveText] = useState('')
  const [subloginNullOrHaveText, setSubloginNullOrHaveText] = useState('')
  const [passwordNullOrHaveText, setPasswordNullOrHaveText] = useState('')
  const formCheck = {
    loginNullOrHaveText,
    subloginNullOrHaveText,
    passwordNullOrHaveText,
  }
  return (
    <div className="form-auth">
      <form action="submit" className="form-auth__form">
        <label className="form-auth__label">API-консолька</label>
        {Object.keys(errorAuth).length !== 0 ? (
          <ErrorMessageFormAuth errorAuth={errorAuth} />
        ) : (
          <></>
        )}
        <LoginAuthInput setLoginNullOrHaveText={setLoginNullOrHaveText} />
        <SubloginAuthInput
          setSubloginNullOrHaveText={setSubloginNullOrHaveText}
        />
        <PasswordAuthInput
          setPasswordNullOrHaveText={setPasswordNullOrHaveText}
        />
        <BtnSendFormAuthPage formCheck={formCheck} />
      </form>
    </div>
  )
}

FormAuthPage.propTypes = {
  errorAuth: PropTypes.object,
}

const mapStateToProps = ({ formAuthReducer }) => ({
  errorAuth: formAuthReducer.errorAuth,
})

export default connect(mapStateToProps)(FormAuthPage)
