import React from 'react'
import styled from 'styled-components'
import { colors } from '../utilities/colors'
import ian from '../assets/images/ian.jpg'
import greenPinstripe from '../assets/images/greenPinstripe.svg'
import IntoView from '../utilities/IntoView'
import { device } from '../utilities/breakpoints'

const About = () => (
  <Wrapper id="about">
    <InteriorWrapper>
      <IntoView direction="fade-right">
        <AboutHeader>About</AboutHeader>
        <AboutWrapper>
          <Portrait src={ian} alt="Ian Mackenzie" />
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
  margin: -25rem auto 0;
  background-color: ${colors.gray.light};
  border-radius: 15px;
  /* box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25); */

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
  align-items: center;

  @media ${device.tablet} {
    flex-direction: column;
  }
`

const AboutHeader = styled.h2`
  margin-bottom: 3rem;
  color: ${colors.primary.white};
  position: relative;
  text-transform: uppercase;
  text-align: center;
  font-size: 50px;
  z-index: 100;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: -50%;
    bottom: 0;
    background-image: url(${greenPinstripe});
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }
`
const BioCard = styled.div`
  margin: 2rem;
  margin-right: 0;
  padding: 1rem 2rem;
  align-self: center;

  @media ${device.mobileM} {
    margin: 2rem 0;
  }
`

const Portrait = styled.img`
  display: inline-block;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  max-width: 320px;

  @media ${device.tablet} {
    max-width: 350px;
    width: 100%;
    margin: 0 auto;
  }
`

const NameHeader = styled.h3`
  font-size: 28px;
  color: ${colors.primary.white};
`

const Bio = styled.p`
  color: ${colors.primary.white};
`
