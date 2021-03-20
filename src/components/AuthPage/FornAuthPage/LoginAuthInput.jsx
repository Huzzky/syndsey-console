import PropTypes from 'prop-types'
import { memo, useState } from 'react'
import { validateInputForm } from '../../../utils/valdationForm'
import { formInput, formTypeValidate } from '../../../const'

const Component = ({ setLoginNullOrHaveText }) => {
  const [loginCheck, setLoginCheck] = useState(true)
  return (
    <div className="login form-auth__login">
      <p className={loginCheck ? 'login__p' : 'login__p--error'}>Логин</p>
      <input
        className={loginCheck ? 'login__input' : 'login__input--error'}
        onBlur={(e) => {
          validateInputForm(
            e.currentTarget.value,
            setLoginCheck,
            setLoginNullOrHaveText,
            formTypeValidate.blur,
            formInput.login,
          )
        }}
        type="text"
        required
        onChange={(e) => {
          validateInputForm(
            e.currentTarget.value,
            setLoginCheck,
            setLoginNullOrHaveText,
            formTypeValidate.validate,
            formInput.login,
          )
        }}
      />
    </div>
  )
}

Component.propTypes = {
  setLoginNullOrHaveText: PropTypes.func,
}

export const LoginAuthInput = memo(Component)
