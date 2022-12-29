// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value
      return (
        <div className="configuration-container">
          <h1 className="layout-heading">Layout</h1>
          <div className="configuration-item">
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onClick={onToggleShowContent}
            />
            <label htmlFor="content">Content</label>
          </div>
          <br />
          <div className="configuration-item">
            <input
              type="checkbox"
              id="left-navbar"
              checked={showLeftNavbar}
              onClick={onToggleShowLeftNavbar}
            />
            <label htmlFor="left-navbar">Left Navbar</label>
          </div>
          <br />
          <div className="configuration-item">
            <input
              type="checkbox"
              id="right-navbar"
              checked={showRightNavbar}
              onClick={onToggleShowRightNavbar}
            />
            <label htmlFor="right-navbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
