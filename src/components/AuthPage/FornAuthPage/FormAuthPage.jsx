import { useState } from 'react'
import { BtnSendFormAuthPage } from './BtnSendFormAuthPage'
import { LoginAuthInput } from './LoginAuthInput'
import { PasswordAuthInput } from './PasswordAuthInput'
import { SubloginAuthInput } from './SubloginAuthInput'

const FormAuthPage = () => {
  const [loginNullOrHaveText, setLoginNullOrHaveText] = useState('')
  return (
    <div className="form-auth">
      <form action="submit" class="form-auth__form">
        <label className="form-auth__label">API-консолька</label>
        <LoginAuthInput setLoginNullOrHaveText={setLoginNullOrHaveText} />
        <SubloginAuthInput />
        <PasswordAuthInput />
        <BtnSendFormAuthPage loginCheck={loginNullOrHaveText} />
      </form>
    </div>
  )
}

export default FormAuthPage
