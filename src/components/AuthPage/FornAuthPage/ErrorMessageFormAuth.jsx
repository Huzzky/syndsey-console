import { EmojiMahErrorMessageFormAuth } from '../../Core/EmojiMahErrorMessageFormAuth'

export const ErrorMessageFormAuth = () => {
  return (
    <div className="form-auth__error">
      <EmojiMahErrorMessageFormAuth />
      <label className="form-auth__error__label">Вход не вышел</label>
    </div>
  )
}
