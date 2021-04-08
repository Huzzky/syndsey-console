import { useState } from 'react'
import '../../assets/_fullscreen-logo.scss'

export const FullscreenBtn = () => {
  const [fullscreenBool, setFullscreenBool] = useState(false)

  let fullScreenFuncMini = fullscreenBool ? 'after' : 'before'

  return (
    <div
      className="api-console__header__fullscreen-btn-container"
      onClick={() => {
        console.log(fullScreenFuncMini)
        if (!fullscreenBool) {
          setFullscreenBool(true)
          document.documentElement.webkitRequestFullScreen()
        } else if (fullscreenBool) {
          setFullscreenBool(false)
          document.webkitCancelFullScreen()
        }
      }}
    >
      <div
        className={
          'api-console__header__fullscreen-btn  fullscreen-btn--' +
          fullScreenFuncMini
        }
      >
        <div
          className={
            'fullscreen-btn--' + fullScreenFuncMini + '__container-first'
          }
        >
          <div
            className={
              'fullscreen-btn--' + fullScreenFuncMini + '__square-first'
            }
          ></div>
          <div
            className={
              'fullscreen-btn--' + fullScreenFuncMini + '__square-second'
            }
          ></div>
        </div>
        <div
          className={
            'fullscreen-btn--' + fullScreenFuncMini + '__container-second'
          }
        >
          <div
            className={
              'fullscreen-btn--' + fullScreenFuncMini + '__square-third'
            }
          ></div>
          <div
            className={
              'fullscreen-btn--' + fullScreenFuncMini + '__square-fourth'
            }
          ></div>
        </div>
      </div>
    </div>
  )
}
