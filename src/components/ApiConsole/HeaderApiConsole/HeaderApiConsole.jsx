import { FullscreenBtn } from '../../Core/FullscreenBtn'
import { HeaderTitle } from '../HeaderApiConsole/HeaderTitle'
import { LogOutButtonLink } from './LogOutButtonLink'
import ProfileTab from './ProfileTab'

const HeaderApiConsole = () => {
  return (
    <header className="api-console__header">
      <HeaderTitle />
      <div className="api-console__header__containter">
        <ProfileTab />
        <LogOutButtonLink />
        <FullscreenBtn />
      </div>
    </header>
  )
}

export default HeaderApiConsole
