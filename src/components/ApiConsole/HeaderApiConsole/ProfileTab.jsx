import { RequestCookieUserForAuth } from '../../../store/cookies/userCookies'

const ProfileTab = () => {
  let profileInfo = RequestCookieUserForAuth().user
  return (
    <div>
      <span>{profileInfo.account}</span>
      <span> : </span>
      <span>{profileInfo.sublogin}</span>
    </div>
  )
}

export default ProfileTab
