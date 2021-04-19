import { useState } from 'react'
import '../../../assets/_historyRequestsComponent.scss'
import Drowdown from './Drowdown'

let HistoryRequestsArr = ['1', 2, 3]

export const HistoryRequestsComponent = () => {
  const [dropdownActive, setDropdownActive] = useState(false)
  // TODO сделать запись в куки запросов (уникальность, название, ошибка или норм, сам запрос)
  let HistoryRequestsHTML = HistoryRequestsArr.map((value, index) => {
    return (
      <div key={index} className="history-component__request-container">
        <div className="history-component__request">
          <div className="history-component__request__action-result--true"></div>
          <div className="history-component__request__action-type">
            track.get
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
