import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import { Link } from 'react-router-dom'

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
          <NavbarBrand tag={Link} to="/">Puppy Shop</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/cart">Cart</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Language
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>German</DropdownItem>
                  <DropdownItem>English</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
