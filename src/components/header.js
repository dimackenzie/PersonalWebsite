import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Typist from 'react-typist'
import IntoView from '../utilities/IntoView'
import 'babel-polyfill'
import '../../node_modules/react-typist/dist/Typist.css'
import Menu from './menu'
import { colors } from '../utilities/colors'
import { device } from '../utilities/breakpoints'
import ian from '../assets/images/ian.svg'
import pinstripe from '../assets/images/pinstripe.svg'
import arrow from '../assets/images/arrow.svg'

const Header = () => (
  <HeaderWrapper>
    <NavBar>
      <IntoView direction="fade-right">
        <LogoWrap>
          <Link to="/">
            <Logo src={ian} alt="Ian Mackenzie" />
          </Link>
        </LogoWrap>
      </IntoView>
      <Menu />
    </NavBar>
    <IntoView direction="fade-up">
      <PunchlineWrapper>
        <PunchlineBackground>
          <Punchline>
            <Typist>
              Hello, I'm Ian. I make FAST and RELIABLE modern websites.
            </Typist>
          </Punchline>
        </PunchlineBackground>
        <Arrow src={arrow} alt="Scroll Down" />
      </PunchlineWrapper>
    </IntoView>
  </HeaderWrapper>
)

export default Header

const HeaderWrapper = styled.div`
  min-height: 550px;
  position: relative;
  background-color: ${colors.gray.dark};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);

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
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const PunchlineBackground = styled.div`
  background-image: url(${pinstripe});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 5rem;
  padding: 1rem;
  min-height: 230px;
`

const Punchline = styled.h2`
  color: ${colors.primary.white};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.45);
  display: block;
  max-width: 700px;
  margin: 0 auto;
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
