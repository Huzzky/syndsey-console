import '../../../assets/_animation.scss'
import { useState } from 'react'
import { AnimationLoader } from '../../Core/AnimationLoader'

export const BtnSendFormAuthPage = (props) => {
  const [send, setSend] = useState(false)

  return !send ? (
    <button
      onClick={(e) => {
        e.preventDefault()
        setSend(true)
      }}
      className={
        'form-auth__form__button-send' +
        (props.loginCheck === '' ? '--disabled' : '')
      }
      type="submit"
      disabled={props.loginCheck === '' ? 'disabled' : ''}
    >
      Войти
    </button>
  ) : (
    <div className="form-auth__form__button-send">
      <AnimationLoader />
    </div>
  )
}
