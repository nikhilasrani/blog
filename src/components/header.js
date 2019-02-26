import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../components/header.css"

const Header = ({ siteTitle }) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div />
      <div className="toolbar__logo">
        <Link to="/">Nikhil Asrani</Link>
      </div>

      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul
          style={{
            listStyle: "none",
            display: "flex",
          }}
        >
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
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
