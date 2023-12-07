import './index.css'

const HistoryItems = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const deleting = () => {
    deleteHistory(id)
  }

  return (
    <li className="list">
      <p className="time">{timeAccessed}</p>
      <img className="logo" src={logoUrl} alt="domain logo" />
      <p className="title">{title}</p>
      <div className="web-container">
        <p className="time">{domainUrl} </p>
        <button data-testid="delete" type="button" className="button">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            onClick={deleting}
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItems
