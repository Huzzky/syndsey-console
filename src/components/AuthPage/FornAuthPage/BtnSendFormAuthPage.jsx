import '../../../assets/_animation.scss'
import { useState } from 'react'
import { AnimationLoader } from '../../Core/AnimationLoader'

export const BtnSendFormAuthPage = ({ formCheck }) => {
  const [send, setSend] = useState(false)

  return !send ? (
    <button
      onClick={(e) => {
        console.log(formCheck)
        setSend(true)
      }}
      className={
        'form-auth__form__button-send' +
        (formCheck.loginNullOrHaveText === '' ||
        formCheck.passwordNullOrHaveText === ''
          ? '--disabled'
          : '')
      }
      type="submit"
      disabled={formCheck.loginNullOrHaveText === '' ? 'disabled' : ''}
    >
      Войти
    </button>
  ) : (
    <div className="form-auth__form__button-send">
      <AnimationLoader />
    </div>
  )
}
