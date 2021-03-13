import '../../../assets/_animation.scss'
import { useState } from 'react'
import { AnimationLoader } from '../../Core/AnimationLoader'

export const BtnSendFormAuthPage = () => {
  const [loginValidate, setLoginValidate] = useState(true)
  const [passwordValidate, setPasswordValidate] = useState(true)
  const [send, setSend] = useState(false)

  return !send ? (
    <button
      onClick={(e) => {
        e.preventDefault()
        setSend(true)
      }}
      className="form-auth__form__button-send"
      type="submit"
      disabled={
        passwordValidate === true && loginValidate === true ? '' : 'disabled'
      }
    >
      Войти
    </button>
  ) : (
    <div className="form-auth__form__button-send">
      <AnimationLoader />
    </div>
  )
}
