import { EmojiMahErrorMessageFormAuth } from '../../Core/EmojiMahErrorMessageFormAuth'
import PropTypes from 'prop-types'

export const ErrorMessageFormAuth = ({ errorAuth }) => {
  console.log(errorAuth)
  return (
    <div className="form-auth__error">
      <div className="form-auth__error--background">
        <div className="form-auth__error__desc-labels">
          <EmojiMahErrorMessageFormAuth />
          <label className="form-auth__error__label">Вход не вышел</label>
        </div>
        <div className="form-auth__error__desc-labels">
          <div className="form-auth__error__desc-labels--empty-place"></div>
          <label className="form-auth__error__label--cause">
            {errorAuth.explain}
          </label>
        </div>
      </div>
    </div>
  )
}

ErrorMessageFormAuth.propTypes = {
  errorAuth: PropTypes.object,
}
