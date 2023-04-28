import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

import Header from '../Header'

import Footer from '../Footer'

const Layout = () => {
  const LeftNavBar = () => (
    <nav className="left-navbar">
      <h1 className="navbar-para">Left Navbar Menu</h1>
      <ul className="list-container">
        <p key="1" className="nav-item">
          Item 1
        </p>
        <p key="2" className="nav-item">
          Item 2
        </p>
        <p key="3" className="nav-item">
          Item 3
        </p>
        <p key="4" className="nav-item">
          Item 4
        </p>
      </ul>
    </nav>
  )

  const RightNavBar = () => (
    <nav className="left-navbar">
      <h1 className="navbar-para">Left Navbar Menu</h1>
      <div className="ad-container">
        <p className="nav-item">Ad 1</p>
      </div>
      <div className="ad-container">
        <p className="nav-item">Ad 2</p>
      </div>
    </nav>
  )

  const Context = () => (
    <div className="context-container">
      <h1 className="navbar-para">Content</h1>
      <p className="nav-item">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniuam
      </p>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="layout">
            <div className="layout-container">
              <Header />
              <div className="middle-container">
                {showContent && <LeftNavBar />}
                {showLeftNavbar && <Context />}
                {showRightNavbar && <RightNavBar />}
              </div>
              <Footer />
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default Layout
