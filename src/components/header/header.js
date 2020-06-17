import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import Context from "../../store/context"
import Switch from "../Switch/Switch"
import "../header/header.css"

const Header = () => {
  const [collapsed, toggleCollapsed] = useState(true)
  const { state, dispatch } = useContext(Context)
  const theme = useTheme()

  const closeNavbar = () => {
    if (collapsed === true) {
      toggleCollapsed(!collapsed)
    }
  }

  return (
    <header
      css={css`
        header,
        header ul {
          background-color: ${state.isDark
            ? theme.dark.background
            : theme.light.background};
        }
      `}
      className="header"
    >
      {/* <Link to="/" className="logo">
        Nikhil Asrani
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="navicon" />
      </label> */}
      <Switch
        isOn={state.isDark}
        onColor="#EF476F"
        handleToggle={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
      />
      {/* <ul className="menu">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul> */}
    </header>
    // <header style={{ height: 100, backgroundColor: "green" }}>
    //   <div className="logo">
    //     <Link to="/">Nikhil Asrani </Link>
    //   </div>
    // </header>
  )
}

export default Header

/* <Navbar
className="navigation__navbar navbar navbar-dark mb-4"
light
expand="md"
>
<Container>
  <div className="toolbar__logo navbar-brand">
    <Link className="nav-link navigation__navlinks" to="/">
      Nikhil {"   "}Asrani
    </Link>
  </div>
  <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
  <Collapse isOpen={!this.state.collapsed} navbar>
    <Nav className="nav-links ml-auto navbar-nav" navbar>
      <NavItem className="nav-item">
        <Link
          onClick={this.closeNavbar}
          className="nav-link navigation__navlinks"
          to="/blog"
        >
          Blog
        </Link>
      </NavItem>
      <NavItem className="nav-item">
        <Link
          onClick={this.closeNavbar}
          className="nav-link navigation__navlinks"
          to="/about"
        >
          About
        </Link>
      </NavItem>
      <NavItem className="nav-item">
        <Link
          onClick={this.closeNavbar}
          className="nav-link navigation__navlinks"
          to="/projects"
        >
          Projects
        </Link>
      </NavItem>
    </Nav>
  </Collapse>
</Container>
</Navbar> */
