import FormAuthPage from './FornAuthPage/FormAuthPage'
import '../../assets/_authPage.scss'
import { RequestCookieUserForAuth } from '../../store/cookies/userCookies'
import { Redirect } from 'react-router'

const AuthPage = () => {
  return RequestCookieUserForAuth() === undefined ? (
    <div className="auth-containter">
      <img className="auth-containter__logo" src="LOGO.svg" alt="Logo" />
      <FormAuthPage />
    </div>
  ) : (
    <Redirect to="/api-console" />
  )
}

export default AuthPage
