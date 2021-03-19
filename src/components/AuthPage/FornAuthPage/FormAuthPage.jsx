import PropTypes from 'prop-types'
import { useState } from 'react'
import { connect } from 'react-redux'
import BtnSendFormAuthPage from './BtnSendFormAuthPage'
import { ErrorMessageFormAuth } from './ErrorMessageFormAuth'
import { LoginAuthInput } from './LoginAuthInput'
import { PasswordAuthInput } from './PasswordAuthInput'
import { SubloginAuthInput } from './SubloginAuthInput'

const FormAuthPage = ({ isError }) => {
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
        {isError ? <ErrorMessageFormAuth /> : <></>}
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
  isError: PropTypes.bool,
}

const mapStateToProps = ({ formAuthReducer }) => ({
  isError: formAuthReducer.isError,
})

export default connect(mapStateToProps)(FormAuthPage)
