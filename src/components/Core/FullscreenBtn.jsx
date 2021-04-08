import { useState } from 'react'
import '../../assets/_fullscreen-logo.scss'

export const FullscreenBtn = () => {
  const [fullscreenBool, setFullscreenBool] = useState(false)
  return (
    <div
      className="api-console__header__fullscreen-btn-container"
      onClick={() => {
        console.log(fullscreenBool)
        if (!fullscreenBool) {
          setFullscreenBool(true)
          document.documentElement.webkitRequestFullScreen()
        } else if (fullscreenBool) {
          setFullscreenBool(false)
          document.webkitCancelFullScreen()
        }
      }}
    >
      <div className="api-console__header__fullscreen-btn--before"></div>
    </div>
  )
}
