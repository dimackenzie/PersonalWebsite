import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Menu from './menu'
import colors from '../utilities/colors'
import logo from '../assets/images/logo.svg'
import poly from '../assets/images/poly.png'

const HeaderWrapper = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0.6), #171717),
    url(${poly}) no-repeat center;
  height: 60vh;
  min-height: 550px;
  position: relative; 
`

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1000px;
  padding: 1rem 0;
`

const LogoWrap = styled.h1`
  margin: 0;
`

const Logo = styled.img`
  margin: 0;
`

const Punchline = styled.h2`
  color: ${colors.white};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.45);
  display: block;
  max-width: 550px;
  margin: 0 auto;
  align-items: center;
  font-size: 40px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;

  span {
    font-weight: 300;
  }
`
const Header = () => (
  <HeaderWrapper>
    <NavBar>
      <LogoWrap>
        <Link to="/">
          <Logo src={logo} alt="Ian Mackenzie" />
        </Link>
      </LogoWrap>
      <Menu />
    </NavBar>
    <Punchline>
      Hello, I'm Ian. I make <span>BEAUTIFUL, BLAZING-FAST</span> websites.
    </Punchline>
  </HeaderWrapper>
)

export default Header
