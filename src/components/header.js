import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Typist from 'react-typist'
import 'babel-polyfill'
import '../../node_modules/react-typist/dist/Typist.css'
import Particles from 'react-particles-js'
import Menu from './menu'
import colors from '../utilities/colors'
import logo from '../assets/images/logo.svg'
import arrow from '../assets/images/arrow.svg'

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
    <PunchlineWrapper>
      <Particles
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#2f2f4f',
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#2f2f4f',
              opacity: 0.4,
              width: 1,
            },
            interactivity: {
              events: {
                onresize: {
                  enable: true,
                  density_auto: true,
                  density_area: 400, // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                },
              },
            },
          },
        }}
        canvasClassName="particle-canvas"
      />
      <Punchline>
        <Typist>
          Hello, I'm Ian. I make <span>BEAUTIFUL, BLAZING-FAST</span> websites.
        </Typist>
      </Punchline>
    </PunchlineWrapper>
    <Arrow src={arrow} />
  </HeaderWrapper>
)

export default Header

const HeaderWrapper = styled.div`
  height: 90vh;
  min-height: 550px;
  position: relative;
  background-color: ${colors.white};
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
  display: block;
  height: calc(100% - 115px);
  width: 100%;
  background-color: ${colors.catskillWhite};
`
const Punchline = styled.h2`
  color: ${colors.martinique};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.45);
  display: block;
  max-width: 700px;
  margin: 0 auto;
  align-items: center;
  font-size: 50px;
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

const Arrow = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto 2rem;
  text-align: center;
`
