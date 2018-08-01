import React from 'react'
import styled from 'styled-components'
import colors from '../utilities/colors'
import portrait from '../assets/images/portrait.png'
import IntoView from '../utilities/IntoView'
import { device } from '../utilities/breakpoints'

const About = () => (
  <Wrapper id="about">
    <InteriorWrapper>
      <IntoView direction="fade-right">
        <AboutHeader>About</AboutHeader>
        <AboutWrapper>
          <Portrait src={portrait} alt="Ian Mackenzie" />
          <BioCard>
            <NameHeader>Ian Mackenzie</NameHeader>
            <Bio>
              I'm a web developer located in Denver, Colorado. I have over 6
              years of experience in both front-end and back-end development,
              working closely with industry professionals. I've got a passion
              for the web, and love to keep up with the latest web development
              trends and technologies. Outside of software development, I enjoy
              live music, camping, hiking, and snowboarding.
            </Bio>
          </BioCard>
        </AboutWrapper>
      </IntoView>
    </InteriorWrapper>
  </Wrapper>
)

export default About

const Wrapper = styled.div`
  padding: 25rem 1rem 15rem;
  background-color: ${colors.woodsmoke};
  margin: -25rem auto 0;

  @media ${device.tablet} {
    padding: 25rem 1rem 5rem;
  }
`
const InteriorWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const AboutWrapper = styled.div`
  display: flex;

  @media ${device.tablet} {
    flex-direction: column;
  }
`

const AboutHeader = styled.h2`
  margin-bottom: 3rem;
  color: ${colors.white};
  position: relative;
  text-transform: uppercase;
  text-align: center;
  font-size: 50px;

  &:before {
    content: '';
    width: 3rem;
    background-color: ${colors.dodgerBlue};
    height: 6px;
    top: -8px;
    border-radius: 1px;
    position: absolute;
  }
`
const BioCard = styled.div`
  margin: 2rem;
  padding: 1rem 2rem;
  align-self: center;

  @media ${device.mobileM} {
    margin: 2rem 0;
  }
`

const Portrait = styled.img`
  display: inline-block;
  border-radius: 3px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);

  @media ${device.tablet} {
    max-width: 350px;
    width: 100%;
    margin: 0 auto;
  }
`

const NameHeader = styled.h3`
  font-size: 28px;
  color: ${colors.white};
`

const Bio = styled.p`
  color: ${colors.white};
`
