import PropTypes from 'prop-types'

const HeaderApiConsole = (props) => {
  return (
    <header>
      <div>
        <img className="auth-containter__logo" src="LOGO.svg" alt="Logo" />
        <label className="form-auth__label">API-консолька</label>
      </div>
    </header>
  )
}

HeaderApiConsole.propTypes = {}

export default HeaderApiConsole
