import '../../../assets/_historyRequestsComponent.scss'

export const HistoryRequestsComponent = () => {
  return (
    <div className="history-component">
      <div className="history-component__request-container">
        <div className="history-component__request">
          <div className="history-component__request-container__action-result"></div>
          <div className="history-component__request-container__action-type">
            track.get
          </div>
          <div className="history-component__request-container__action-menu--container">
            <div className="history-component__request-container__action-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="history-component__dropdown">
          <div>Выполнить</div>
        </div>
      </div>
    </div>
  )
}
