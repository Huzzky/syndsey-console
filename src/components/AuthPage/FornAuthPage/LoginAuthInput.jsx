import { memo, useState } from 'react'

const Component = () => {
  const [loginCheck, setLoginCheck] = useState(true)
  return (
    <div className="login form-auth__login">
      <p className={loginCheck ? 'login__p' : 'login__p--error'}>Логин</p>
      <input
        className={loginCheck ? 'login__input' : 'login__input--error'}
        onBlur={(e) => {
          e.currentTarget.value === ''
            ? setLoginCheck(false)
            : setLoginCheck(true)
        }}
        type="text"
        required
      />
    </div>
  )
}

export const LoginAuthInput = memo(Component)
