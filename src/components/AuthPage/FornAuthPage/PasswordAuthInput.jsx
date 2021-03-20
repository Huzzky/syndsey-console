import PropTypes from 'prop-types'
import { memo, useState } from 'react'
import { validateInputForm } from '../../../utils/valdationForm'
import { formInput, formTypeValidate } from '../../../const'

const Component = ({ setPasswordNullOrHaveText }) => {
  const [passwordCheck, setPasswordCheck] = useState(true)

  const validatePassword = (password, type) => {
    validateInputForm(
      password,
      setPasswordCheck,
      setPasswordNullOrHaveText,
      type,
      formInput.password,
    )
  }

  return (
    <div className="password form-auth__password">
      <p className={passwordCheck ? 'password__p' : 'password__p--error'}>
        Пароль
      </p>
      <input
        onChange={(e) => {
          validatePassword(e.currentTarget.value, formTypeValidate.validate)
        }}
        onBlur={(e) => {
          validatePassword(e.currentTarget.value, formTypeValidate.blur)
        }}
        className={passwordCheck ? 'password__input' : 'password__input--error'}
        type="password"
        required
      ></input>
    </div>
  )
}

Component.propTypes = {
  setPasswordNullOrHaveText: PropTypes.func,
}

export const PasswordAuthInput = memo(Component)
