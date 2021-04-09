import { Link } from 'react-router-dom'
import { userRemoveCookies } from '../../../store/cookies/userCookies'

export const LogOutButtonLink = () => {
  return (
    <Link
      className="link-log-out"
      to="/auth-user"
      onClick={() => userRemoveCookies('user', '/')}
    >
      <span className="link-log-out__span">Выйти</span>
      <img className="link-log-out__logo" src="log-out.svg" alt="log-out" />
    </Link>
  )
}
