import { RequestCookieUserForAuth } from '../../../store/cookies/userCookies'
import '../../../assets/_profileTab.scss'

const ProfileTab = () => {
  let profileInfo = RequestCookieUserForAuth().user
  return (
    <div className="profileTab">
      <span className="profileTab__account-user">{profileInfo.account}</span>
      <span className="profileTab__double-dot"> : </span>
      <span className="profileTab__sublogin-user">{profileInfo.sublogin}</span>
    </div>
  )
}

export default ProfileTab
