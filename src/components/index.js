import {Component} from 'react'
import './index.css'

class Browser extends Component {
  render() {
    const {details} = this.props
    const {title, timeAccessed, logoUrl, domainUrl} = details

    return (
      <li className="list-item">
        <p className="time">{timeAccessed}</p>

        <div className="domain-delete">
          <div className="domain-details">
            <img src={logoUrl} className="logo" alt={title} />
            <div className="label-title">
              <h1 id="forTitle" className="title">
                {title}
              </h1>
              <label className="domain" htmlFor="forTitle">
                {domainUrl}
              </label>
            </div>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </div>
      </li>
    )
  }
}
export default Browser
