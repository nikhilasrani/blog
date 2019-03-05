import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../header/header.css"

const Header = ({ siteTitle }) => (
  <header className="toolbar">
    <nav className="navbar navbar-expand-md navbar-dark mb-4">
      <div className="container">
        <div className="toolbar__logo navbar-brand">
          <Link to="/">Nikhil Asrani</Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMain"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
