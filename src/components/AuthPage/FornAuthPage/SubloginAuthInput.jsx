import { memo } from 'react'

const component = ({ setSubloginNullOrHaveText }) => {
  return (
    <div className="sublogin form-auth__sublogin">
      <div className="sublogin__text-content">
        <p className="sublogin__text-content__p">Сублогин</p>
        <p className="sublogin__text-content__p--hint">Опционально</p>
      </div>
      <input
        onChange={(e) => {
          setSubloginNullOrHaveText(e.currentTarget.value)
        }}
        className="sublogin__input"
        type="text"
      ></input>
    </div>
  )
}

export const SubloginAuthInput = memo(component)
