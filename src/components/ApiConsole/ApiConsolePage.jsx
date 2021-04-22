import HeaderApiConsole from './HeaderApiConsole/HeaderApiConsole'
import '../../assets/_apiConsole.scss'
import FormsApiConsole from './FormApiConsole/FormsApiConsole'
import HistoryRequestsComponent from './HistoryRequests/HistoryRequestsComponent'
import { FooterApiConsoleComponent } from './FooterApiConsole/FooterApiConsoleComponent'
import { RequestCookieUserForAuth } from '../../store/cookies/userCookies'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

const ApiConsolePage = ({ userAuthSucces }) => {
  console.log(userAuthSucces)
  return RequestCookieUserForAuth() === undefined ? (
    <Redirect to="/auth-user" />
  ) : (
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

const mapStateToProps = ({ userActionsReducer }) => ({
  userAuthSucces: userActionsReducer.userAuthSucces,
})

export default connect(mapStateToProps)(ApiConsolePage)
