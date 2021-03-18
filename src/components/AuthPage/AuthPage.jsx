// import PropTypes from 'prop-types'
import FormAuthPage from './FornAuthPage/FormAuthPage'
import '../../assets/_authPage.scss'

const AuthPage = () => {
  return (
    <div className="auth-containter">
      <img className="auth-containter__logo" src="LOGO.svg" alt="Logo" />
      <FormAuthPage />
    </div>
  )
}

// AuthPage.propTypes = {}

export default AuthPage
