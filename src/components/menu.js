import React, { Fragment, Component } from 'react'
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
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
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
    align-self: center;
    width: 45px;
    height: 43px;
    background: none;
    border: none;
    padding: 7px;
    margin-left: auto;
    transition: all 0.3s ease;
    transform: translate3d(0, 0, 0);
    &.open {
      background-color: ${colors.gunPowder};
      border-radius: 4px;
      transform: translate3d(0, 0, 0);
    }
  }
`

const MenuBurger = styled.span`
  display: block;
  width: 30px;
  height: 4px;
  margin: 8px auto;
  background-color: ${colors.gunPowder};
  border-radius: 1px;
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
    border-radius: 1px;
    background-color: ${colors.gunPowder};
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
    background-color: ${colors.white};
    top: 20px;
    margin: 0;
    transform: rotate(45deg);
  }
  &.open::after {
    background-color: ${colors.white};
    top: 20px;
    margin: 0;
    transform: rotate(-45deg);
  }
`

const Nav = styled.nav`
  display: flex;
  z-index: 100;

  @media ${device.tablet} {
    position: absolute;
    top: 115px;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    flex-direction: column;
    opacity: 0;
    transform: translate3d(0, -35px, 0);
    transition: all 0.3s ease;
    &.open {
      background-color: ${colors.gunPowder};
      border-radius: 4px;
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`

const NavLink = styled.a`
  color: ${colors.gunPowder};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  padding: 0.5rem 1rem;
  margin: 0 0.3rem;
  transition: all 0.3s;
  border-radius: 3px;
  background-size: 100% 200%;
  background-image: linear-gradient(
    to top,
    ${colors.dodgerBlue} 50%,
    transparent 50%
  );
  @media ${device.tablet} {
    color: ${colors.white};
    background-image: none;
  }
  &:after {
    content: '';
    height: 100%;
    width: 100%;
    background: red;
  }
  &:hover {
    background-position: 0 100%;
    color: ${colors.white};
    background-image: linear-gradient(
      to top,
      ${colors.dodgerBlue} 50%,
      transparent 50%
    );

    @media ${device.tablet} {
      background-image: none;
    }
  }
`
