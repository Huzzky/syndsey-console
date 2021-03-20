import PropTypes from 'prop-types'
import { memo, useState } from 'react'
import { validateInputForm } from '../../../utils/valdationForm'
import { formInput, formTypeValidate } from '../../../const'

const Component = ({ setLoginNullOrHaveText }) => {
  const [loginCheck, setLoginCheck] = useState(true)

  const validateLogin = (login, type) => {
    validateInputForm(
      login,
      setLoginCheck,
      setLoginNullOrHaveText,
      type,
      formInput.login,
    )
  }
  return (
    <div className="login form-auth__login">
      <p className={loginCheck ? 'login__p' : 'login__p--error'}>Логин</p>
      <input
        className={loginCheck ? 'login__input' : 'login__input--error'}
        onBlur={(e) => {
          validateLogin(e.currentTarget.value, formTypeValidate.blur)
        }}
        type="text"
        required
        onChange={(e) => {
          validateLogin(e.currentTarget.value, formTypeValidate.validate)
        }}
      />
    </div>
  )
}

Component.propTypes = {
  setLoginNullOrHaveText: PropTypes.func,
}

export const LoginAuthInput = memo(Component)
