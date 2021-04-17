import { RequestCookieUserForAuth } from '../../../store/cookies/userCookies'
import '../../../assets/_profileTab.scss'
import { memo } from 'react'

const Component = () => {
  let profileInfo
  try {
    profileInfo = JSON.parse(RequestCookieUserForAuth()).user
  } catch {
    profileInfo = { account: '', sublogin: '' }
  }
  return (
    <div className="profileTab">
      <span className="profileTab__account-user">{profileInfo.account}</span>
      <span className="profileTab__double-dot"> : </span>
      <span className="profileTab__sublogin-user">{profileInfo.sublogin}</span>
    </div>
  )
}

export const ProfileTab = memo(Component)
