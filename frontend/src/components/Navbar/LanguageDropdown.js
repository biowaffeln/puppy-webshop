import React from 'react'
import { Languages } from '../../reducers/language'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import './dropdown.scss'

const LanguageDropdown = ({ label, changeLanguage }) =>
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      {label}
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem className='dropdown-button' onClick={() => changeLanguage(Languages.GERMAN)}>
        <img className='dropdown-image' alt='german' src='https://lipis.github.io/flag-icon-css/flags/4x3/de.svg' />
      </DropdownItem>
      <DropdownItem className='dropdown-button' onClick={() => changeLanguage(Languages.ENGLISH)}>
        <img className='dropdown-image' alt='english' src='https://lipis.github.io/flag-icon-css/flags/4x3/um.svg' />
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>

export default LanguageDropdown
