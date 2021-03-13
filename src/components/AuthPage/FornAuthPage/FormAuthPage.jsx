// import PropTypes from 'prop-types'

import { BtnSendFormAuthPage } from './BtnSendFormAuthPage'
import { LoginAuthInput } from './LoginAuthInput'
import { PasswordAuthInput } from './PasswordAuthInput'
import { SubloginAuthInput } from './SubloginAuthInput'

const FormAuthPage = (props) => {
  return (
    <div className="form-auth">
      <form action="submit" class="form-auth__form">
        <label className="form-auth__label">API-консолька</label>
        <LoginAuthInput />
        <SubloginAuthInput />
        <PasswordAuthInput />
        <BtnSendFormAuthPage />
      </form>
    </div>
  )
}

// FormAuthPage.propTypes = {}

export default FormAuthPage
