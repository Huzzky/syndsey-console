import PropTypes from 'prop-types'
import { memo, useState } from 'react'
import { validateLogin } from '../../../utils/valdationForm'

const Component = ({ setLoginNullOrHaveText }) => {
  const [loginCheck, setLoginCheck] = useState(true)
  return (
    <div className="login form-auth__login">
      <p className={loginCheck ? 'login__p' : 'login__p--error'}>Логин</p>
      <input
        className={loginCheck ? 'login__input' : 'login__input--error'}
        onBlur={(e) => {
          validateLogin(
            e.currentTarget.value,
            setLoginCheck,
            setLoginNullOrHaveText,
            'blur',
          )
        }}
        type="text"
        required
        onChange={(e) => {
          validateLogin(
            e.currentTarget.value,
            setLoginCheck,
            setLoginNullOrHaveText,
            'validate',
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
