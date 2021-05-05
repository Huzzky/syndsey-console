import { useState } from 'react'
import { connect } from 'react-redux'
import '../../../assets/_historyRequestsComponent.scss'
import { userDeletingCookiesWithRequests } from '../../../store/actions/userDeletingCookiesWithRequests'
import Drowdown from './Drowdown'

const HistoryRequestsComponent = ({
  userRequestHistory,
  userDeletingCookiesWithRequests,
}) => {
  const [dropdownActive, setDropdownActive] = useState(false)

  // TODO сделать запись в куки запросов (уникальность, название, ошибка или норм, сам запрос)
  let HistoryRequestsHTML = userRequestHistory.reverse().map((value, index) => {
    return (
      <div key={index} className="history-component__request-container">
        <div className="history-component__request">
          <div
            className={`history-component__request__action-result--${value.userRequest.haveError}`}
          ></div>
          <div className="history-component__request__action-type">
            {
              value.userRequest.request[0][
                Object.keys(value.userRequest.request[0])[0]
              ]
            }
          </div>
          <div
            className="history-component__request__action-menu"
            onClick={() => {
              dropdownActive
                ? setDropdownActive(false)
                : setDropdownActive(true)
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Drowdown
          dropdownActiveBool={dropdownActive}
          setDropdownActiveBool={setDropdownActive}
        />
      </div>
    )
  })

  return (
    <div className="history">
      <div className="history-component">{HistoryRequestsHTML}</div>
      <div className="history__container-delete">
        <div className="history__gradient"></div>
        <div
          className="history__btn-history-panel"
          onClick={() => userDeletingCookiesWithRequests()}
        >
          X
        </div>
      </div>
    </div>
  )
}

const mapDispatch = (dispatch) => ({
  userDeletingCookiesWithRequests: () =>
    dispatch(userDeletingCookiesWithRequests()),
})

const mapStateToProps = ({ userActionsReducer }) => ({
  userRequestHistory: userActionsReducer.reqHistory,
})

export default connect(mapStateToProps, mapDispatch)(HistoryRequestsComponent)
