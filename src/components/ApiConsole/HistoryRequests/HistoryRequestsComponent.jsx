import { useState } from 'react'
import { connect } from 'react-redux'
import '../../../assets/_historyRequestsComponent.scss'
import Drowdown from './Drowdown'

const HistoryRequestsComponent = ({ userRequestHistory }) => {
  const [dropdownActive, setDropdownActive] = useState(false)

  // TODO сделать запись в куки запросов (уникальность, название, ошибка или норм, сам запрос)
  let HistoryRequestsHTML = userRequestHistory.reverse().map((value, index) => {
    console.log(value)
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

  return <div className="history-component">{HistoryRequestsHTML}</div>
}

const mapStateToProps = ({ userActionsReducer }) => ({
  userRequestHistory: userActionsReducer.reqHistory,
})

export default connect(mapStateToProps)(HistoryRequestsComponent)
