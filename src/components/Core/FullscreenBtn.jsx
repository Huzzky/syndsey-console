export const FullscreenBtn = () => {
  return (
    <div
      className="api-console__header__fullscreen-btn-container"
      onClick={() => {
        document.documentElement.requestFullscreen()
      }}
    >
      <div className="api-console__header__fullscreen-btn--before"></div>
    </div>
  )
}
