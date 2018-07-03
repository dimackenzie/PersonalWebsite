import React from 'react'
import styled from 'styled-components'
import colors from '../utilities/colors'
import portrait from '../assets/images/Placeholder.gif'
import IntoView from '../utilities/IntoView'

const Wrapper = styled.div`
  margin: 20rem auto 10rem;
  max-width: 960px;
`

const AboutWrapper = styled.div`
  display: flex;
`

const AboutHeader = styled.h2`
  margin-bottom: 3rem;
  color: ${colors.white};
  position: relative;
  text-transform: uppercase;
  font-size: 40px;

  &:before {
    content: '';
    width: 5%;
    background-color: ${colors.teal};
    height: 6px;
    top: -8px;
    position: absolute;
  }
`
const BioCard = styled.div`
  background-color: ${colors.mediumGrey};
  margin: 2rem;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  align-self: center;
`

const Portrait = styled.img`
  display: inline-block;
`

const NameHeader = styled.h3`
  color: ${colors.teal};
`

const Bio = styled.p`
  color: ${colors.white};
`

const About = () => (
  <Wrapper>
    <IntoView direction="fade-right">
      <AboutHeader>About</AboutHeader>
      <AboutWrapper>
        <Portrait src={portrait} alt="Ian Mackenzie" />
        <BioCard>
          <NameHeader>Ian Mackenzie</NameHeader>
          <Bio>
            I'm a web developer located in Denver, Colorado. I have over 6 years
            of experience in both front-end and back-end development, working
            closely with industry professionals. I've got a passion for the web,
            and love to keep up with the latest web development trends and
            technologies. Outside of software development, I enjoy live music,
            camping, hiking, and snowboarding.
          </Bio>
        </BioCard>
      </AboutWrapper>
    </IntoView>
  </Wrapper>
)

export default About
