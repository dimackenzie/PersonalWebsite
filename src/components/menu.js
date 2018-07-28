import React, { Fragment, Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import colors from '../utilities/colors'
import { device } from '../utilities/breakpoints'

export default class Menu extends Component {
  state = {
    open: false,
  }

  toggleMenu = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
      <Fragment>
        <MenuButton
          onClick={this.toggleMenu}
          className={this.state.open ? 'open' : ''}
        >
          <MenuBurger className={this.state.open ? 'open' : ''} />
        </MenuButton>
        <Nav className={this.state.open ? 'open' : ''}>
          <NavLink>Services</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </Nav>
      </Fragment>
    )
  }
}

const MenuButton = styled.a`
  display: none;

  @media ${device.tablet} {
    display: inline-block;
    cursor: pointer;
    align-self: flex-start;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    padding: 7px;
    margin-left: auto;
    transition: all 0.3s ease;
    transform: translate3d(100px, 0, 0);
    &.open {
      background-color: ${colors.white}
      transform: translate3d(0, 0, 0);
    }
  }
`

const MenuBurger = styled.span`
  display: block;
  width: 30px;
  height: 4px;
  margin: 8px auto;
  background-color: ${colors.white};
  transition: all 0.3s ease;

  &.open {
    background-color: transparent;
  }
  &::before,
  &::after {
    content: '';
    display: block;
    width: 30px;
    height: 4px;
    background-color: ${colors.white};
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    margin: 5px 0;
    top: 0px;
  }
  &::after {
    margin: 10px 0;
    top: 15px;
  }
  &.open::before {
    background-color: ${colors.mediumGrey};
    top: 20px;
    margin: 0;
    transform: rotate(45deg);
  }
  &.open::after {
    background-color: ${colors.mediumGrey};
    top: 20px;
    margin: 0;
    transform: rotate(-45deg);
  }
`

const Nav = styled.nav`
  display: flex;

  @media ${device.tablet} {
    flex-direction: column;
    opacity: 0;
    transform: translate3d(100px, 0, 0);
    transition: all 0.3s ease;
    &.open {
      background-color: ${colors.white};
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
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
  }
  @media ${device.tablet} {
    color: ${colors.mediumGrey};
  }
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
