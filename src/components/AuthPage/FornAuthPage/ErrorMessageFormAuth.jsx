export const ErrorMessageFormAuth = () => {
  return (
    <div className="form-auth__error">
      <div className="form-auth__error__emoji-mah emoji-mah">
        <div className="emoji-mah__eyes">
          <div className="emoji-mah__eyes--eye"></div>
          <div className="emoji-mah__eyes--eye"></div>
        </div>
        <div className="emoji-mah__pre-mouth">
          <div className="emoji-mah__mouth"></div>
        </div>
      </div>
      <label className="form-auth__error__label">Вход не вышел</label>
    </div>
  )
}
