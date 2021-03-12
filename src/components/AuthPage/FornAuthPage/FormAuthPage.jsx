// import PropTypes from 'prop-types'

import { useState } from 'react'

const FormAuthPage = (props) => {
  const [loginValidate, setLoginValidate] = useState('')
  return (
    <div className="form-auth">
      <form action="submit" class="form-auth__form auth-form">
        <label className="auth-form__label">API-консолька</label>
        <div className="auth-form__container login">
          <p className="login__p">Логин</p>
          <input className="login__input" type="text" placeholder="Логин" />
        </div>
        <div className="form-auth__sublogin">
          <div className="form-auth__sublogin__text-content">
            <p className="form-auth__sublogin__p-m">Сублогин</p>
            <p className="form-auth__sublogin__p">Опционально</p>
          </div>
          <input type="text" placeholder="Сублогин"></input>
        </div>
        <div>
          <p>Пароль</p>
          <input type="password" placeholder="Пароль"></input>
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  )
}

// FormAuthPage.propTypes = {}

export default FormAuthPage
