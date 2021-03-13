import { memo } from 'react'

const component = () => {
  return (
    <div className="login form-auth__login">
      <p className="login__p">Логин</p>
      <input className="login__input" type="text" required />
    </div>
  )
}

export const LoginAuthInput = memo(component)
