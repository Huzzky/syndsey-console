import { Link } from 'react-router-dom'
import { userRemoveCookies } from '../../../store/cookies/userCookies'

export const LogOutButtonLink = () => {
  return (
    <Link to="/auth-user" onClick={() => userRemoveCookies('user', '/')}>
      <span>Выйти</span>
      <img src="log-out.svg" alt="log-out" />
    </Link>
  )
}
