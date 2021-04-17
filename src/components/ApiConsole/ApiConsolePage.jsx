import HeaderApiConsole from './HeaderApiConsole/HeaderApiConsole'
import '../../assets/_apiConsole.scss'
import FormsApiConsole from './FormApiConsole/FormsApiConsole'
import { HistoryRequestsComponent } from './HistoryRequests/HistoryRequestsComponent'
import { FooterApiConsoleComponent } from './FooterApiConsole/FooterApiConsoleComponent'

const ApiConsolePage = () => {
  return (
    <div className="api-console">
      <HeaderApiConsole />
      <div className="api-console__line"></div>
      {/* side bar */}
      <HistoryRequestsComponent />
      <div className="api-console__line"></div>
      <div className="api-console__forms-container">
        <FormsApiConsole />
      </div>
      <div className="api-console__line"></div>

      <FooterApiConsoleComponent />
    </div>
  )
}

export default ApiConsolePage
