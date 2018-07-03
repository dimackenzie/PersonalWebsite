import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import colors from '../utilities/colors'
import { device } from '../utilities/breakpoints'

const Menu = () => {
  const toggleMenu = () => {
    return
  }

  return (
    <Fragment>
      <MenuIcon onClick={toggleMenu} />
      <Nav>
        <NavLink>Services</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </Nav>
    </Fragment>
  )
}

const MenuIcon = styled(Link)`
  display: none;

  @media ${device.tablet} {
    display: inline-block;
    cursor: pointer;
    width: 50px;
    height: 50px;
    position: relative;
  }
`

const Nav = styled.nav`
  display: flex;
`

const NavLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 600;
  padding: 0.5rem;
  margin: 0 0.3rem;
  transition: all 0.3s;
  background-size: 100% 200%;
  background-image: linear-gradient(
    to top,
    ${colors.teal} 50%,
    transparent 50%
  );

  &:after {
    content: '';
    height: 100%;
    width: 100%;
    background: red;
  }
  &:hover {
    background-position: 0 100%;
    background-image: linear-gradient(
      to top,
      ${colors.teal} 50%,
      transparent 50%
    );
  }
`

export default Menu
