import React from 'react'
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

export default class Example extends React.Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }))
  }

  render() {
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
                <NavLink tag={Link} to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/cart">Cart</NavLink>
              </NavItem>
              <LanguageDropdownContainer label='Language' />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
