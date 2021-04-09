import HeaderApiConsole from './HeaderApiConsole/HeaderApiConsole'
import '../../assets/_apiConsole.scss'

const ApiConsolePage = () => {
  return (
    <div className="api-console">
      <HeaderApiConsole />
      <div className="api-console__line"></div>
      {/* side bar */}
      <div className="api-console__line"></div>
    </div>
  )
}

export default ApiConsolePage
