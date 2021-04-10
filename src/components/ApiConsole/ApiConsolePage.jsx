import HeaderApiConsole from './HeaderApiConsole/HeaderApiConsole'
import '../../assets/_apiConsole.scss'
import FormsApiConsole from './FormApiConsole/FormsApiConsole'

const ApiConsolePage = () => {
  return (
    <div className="api-console">
      <HeaderApiConsole />
      <div className="api-console__line"></div>
      {/* side bar */}
      <div></div>
      <div className="api-console__line"></div>
      <FormsApiConsole />
      <div className="api-console__line"></div>

      <div></div>
    </div>
  )
}

export default ApiConsolePage
