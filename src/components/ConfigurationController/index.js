import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeShowContent = () => {
        onToggleShowContent()
      }
      const onChangeShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const onChangeShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="configuration-container">
          <h1 className="configuration-heading">Layout</h1>
          <div className="checkbox-cintainer">
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={onChangeShowContent}
            />
            <label className="label" htmlFor="content">
              Content
            </label>
          </div>
          <div className="checkbox-cintainer">
            <input
              type="checkbox"
              id="leftNavbar"
              checked={showLeftNavbar}
              onChange={onChangeShowLeftNavbar}
            />
            <label className="label" htmlFor="leftNavbar">
              Left Navbar
            </label>
          </div>
          <div className="checkbox-cintainer">
            <input
              type="checkbox"
              id="rightNavbar"
              checked={showRightNavbar}
              onChange={onChangeShowRightNavbar}
            />
            <label className="label" htmlFor="rightNavbar">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
