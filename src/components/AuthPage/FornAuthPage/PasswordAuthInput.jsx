import { memo } from 'react'

const component = () => {
  return (
    <div className="password form-auth__password">
      <p className="password__p">Пароль</p>
      <input className="password__input" type="password" required></input>
    </div>
  )
}

export const PasswordAuthInput = memo(component)
