import { memo, useState } from 'react'

const Component = ({ setPasswordNullOrHaveText }) => {
  const [passwordCheck, setPasswordCheck] = useState(true)
  return (
    <div className="password form-auth__password">
      <p className={passwordCheck ? 'password__p' : 'password__p--error'}>
        Пароль
      </p>
      <input
        onChange={(e) => {
          e.currentTarget.value.length > 8
            ? setPasswordNullOrHaveText(e.currentTarget.value)
            : setPasswordNullOrHaveText('')
        }}
        onBlur={(e) => {
          e.currentTarget.value === ''
            ? setPasswordCheck(false)
            : setPasswordCheck(true)
        }}
        className={passwordCheck ? 'password__input' : 'password__input--error'}
        type="password"
        required
      ></input>
    </div>
  )
}

export const PasswordAuthInput = memo(Component)
