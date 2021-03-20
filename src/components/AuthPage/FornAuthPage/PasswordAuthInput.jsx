import PropTypes from 'prop-types'
import { memo, useState } from 'react'
import { formInput } from '../../../const'
import { InputFormAuth } from './InputFormAuth'

const Component = ({ setPasswordNullOrHaveText }) => {
  const [passwordCheck, setPasswordCheck] = useState(true)

  return (
    <div className="password form-auth__password">
      <InputFormAuth
        setValueNullOrHaveTextFunc={setPasswordNullOrHaveText}
        setValueCheckFunc={setPasswordCheck}
        value={passwordCheck}
        typeFormInput={formInput.password}
        name={'Пароль'}
      />
    </div>
  )
}

Component.propTypes = {
  setPasswordNullOrHaveText: PropTypes.func,
}

export const PasswordAuthInput = memo(Component)
