import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Typist from 'react-typist'
import IntoView from '../utilities/IntoView'
import 'babel-polyfill'
import '../../node_modules/react-typist/dist/Typist.css'
import Menu from './menu'
import colors from '../utilities/colors'
import { device } from '../utilities/breakpoints'
import logo from '../assets/images/logo.svg'
import arrow from '../assets/images/arrow.svg'
import particles from '../assets/images/particles.png'

const Header = () => (
  <HeaderWrapper>
    <NavBar>
      <IntoView direction="fade-right">
        <LogoWrap>
          <Link to="/">
            <Logo src={logo} alt="Ian Mackenzie" />
          </Link>
        </LogoWrap>
      </IntoView>
      <Menu />
    </NavBar>{' '}
    <IntoView direction="fade-up">
      <PunchlineWrapper>
        <Punchline>
          <Typist>
            Hello, I'm Ian. I make <span>FAST and RELIABLE </span>
            modern websites.
          </Typist>
        </Punchline>
        <Arrow src={arrow} />
      </PunchlineWrapper>
    </IntoView>
  </HeaderWrapper>
)

export default Header

const HeaderWrapper = styled.div`
    height: 85vh;
  min-height: 550px;
  position: relative;
  background-color: ${colors.white};

  @media ${device.tablet} {
height: 100%;
  }
`

const NavBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 1rem;
  height: 115px;
  box-sizing: border-box;
`

const LogoWrap = styled.h1`
  margin: 0;
`

const Logo = styled.img`
  margin: 0;
`
const PunchlineWrapper = styled.div`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.catskillWhite};
  background-image: url(${particles});
`
const Punchline = styled.h2`
  color: ${colors.martinique};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.45);
  display: block;
  max-width: 700px;
  margin: 0 auto 2rem;
  align-items: center;
  font-size: 60px;
  text-align: center;

  @media ${device.tablet} {
    padding: 1rem;
    font-size: 40px;
  }

  span {
    font-weight: 300;
  }
`

const Arrow = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto 2rem;
  text-align: center;
`
