import React from 'react'
import t from '../../services/translation.service'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import LanguageDropdownContainer from './LanguageDropdownContainer'

class NavbarComponent extends React.Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }))
  }

  handleLogout = () => {
    this.props.logout()
    this.props.history.push('/')
  }

  render() {

    const { language, isLoggedIn } = this.props

    return (
      <div>
        <Navbar dark color="primary" expand="sm" className="p-3 shadow">
          <NavbarBrand tag={Link} to="/">
            <Logo />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {
                  isLoggedIn
                    ? <NavLink onClick={this.handleLogout}>{t[language].logout}</NavLink>
                    : <NavLink tag={Link} to="login">{t[language].login}</NavLink>
                }
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="cart">{t[language].cart}</NavLink>
              </NavItem>
              <LanguageDropdownContainer label={t[language].language} />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavbarComponent
