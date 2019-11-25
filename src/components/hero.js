import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Typist from 'react-typist'
import colors from '../utilities/colors'
import { device } from '../utilities/breakpoints'
import arrow from '../assets/images/arrow.svg'
import particles from '../assets/images/particles.png'
import '../../node_modules/react-typist/dist/Typist.css'

const Hero = () => {
  return (
    <PunchlineWrapper
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Punchline>
        <Typist>
          Hello, I'm Ian. I make <span>FAST and RELIABLE </span>
          modern websites.
        </Typist>
      </Punchline>
      <Arrow src={arrow} alt="Scroll Down" />
    </PunchlineWrapper>
  )
}

const PunchlineWrapper = styled(motion.div)`
  height: calc(100vh - 230px);
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
export default Hero
