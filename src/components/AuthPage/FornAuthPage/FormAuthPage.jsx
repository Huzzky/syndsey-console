import { useState } from 'react'
import { BtnSendFormAuthPage } from './BtnSendFormAuthPage'
import { LoginAuthInput } from './LoginAuthInput'
import { PasswordAuthInput } from './PasswordAuthInput'
import { SubloginAuthInput } from './SubloginAuthInput'

const FormAuthPage = () => {
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

export default FormAuthPage
