import PropTypes from 'prop-types'
import { memo, useState } from 'react'
import { formInput } from '../../../const'
import { InputFormAuth } from './InputFormAuth'

const Component = ({ setLoginNullOrHaveText }) => {
  const [loginCheck, setLoginCheck] = useState(true)

  return (
    <div className="login form-auth__login">
      <InputFormAuth
        setValueNullOrHaveTextFunc={setLoginNullOrHaveText}
        setValueCheckFunc={setLoginCheck}
        value={loginCheck}
        typeFormInput={formInput.login}
        name={'Логин'}
      />
    </div>
  )
}

Component.propTypes = {
  setLoginNullOrHaveText: PropTypes.func,
}

export const LoginAuthInput = memo(Component)
