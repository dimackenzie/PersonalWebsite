import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import colors from '../utilities/colors'

const MobileMenu = () => (
  <Fragment>
    <MenuIcon />
    <Nav>
      <NavLink>Services</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact</NavLink>
    </Nav>
  </Fragment>
)

const MenuIcon = styled(Link)`
  cursor: pointer;
  width: 50px;
  height: 50px;
  position: relative;
`

const Nav = styled.nav`
  display: none;
`

const NavLink = styled(Link)``

export default MobileMenu
