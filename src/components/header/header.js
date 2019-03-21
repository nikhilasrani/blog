import { Link } from "gatsby"
import React from "react"
import "../header/header.css"
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap"

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.closeNavbar = this.closeNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  closeNavbar() {
    if (this.state.collapsed === true) {
      this.toggleNavbar()
    }
  }

  render() {
    return (
      <header className="toolbar">
        <Navbar
          className="navigation__navbar navbar navbar-dark mb-4"
          light
          expand="md"
        >
          <Container>
            <div className="toolbar__logo navbar-brand">
              <Link className="nav-link navigation__navlinks" to="/">
                Nikhil Asrani
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
        </Navbar>
      </header>
    )
  }
}
