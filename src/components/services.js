import React from 'react'
import styled from 'styled-components'
import colors from '../utilities/colors'
import IntoView from '../utilities/IntoView'
import { device } from '../utilities/breakpoints'
import PencilRuler from '../assets/images/pencilRuler.svg'
import Code from '../assets/images/code.svg'

const Services = () => (
  <Wrapper id="services">
    <InteriorWrapper>
      <IntoView direction="zoom-in">
        <ServicesHeader>Services</ServicesHeader>
        <ServicesDescription>
          I design and build full-stack web sites and web apps. Have a project
          or idea you'd like to discuss?{' '}
          <LetsTalk href="#contact" title="contact">
            Let's talk.
          </LetsTalk>
        </ServicesDescription>
        <ServicesWrapper>
          <DesignService>
            <RulerIcon src={PencilRuler} />
            <ServiceHeader>Design</ServiceHeader>
            <ServiceDescription>
              From planning and building a sites layout and structure, to
              implementing interactivity and funtionality, I design the visual
              layer.
            </ServiceDescription>
          </DesignService>
          <DevelopService>
            <CodeIcon src={Code} />
            <ServiceHeader>Develop</ServiceHeader>
            <ServiceDescription>
              Here's were I bring those ideas and designs to life. Utilizing
              HTML, CSS, and Javascript, I build fast, interactive websites.
            </ServiceDescription>
          </DevelopService>
        </ServicesWrapper>
      </IntoView>
    </InteriorWrapper>
  </Wrapper>
)

export default Services

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 15rem 1rem;
  background-color: ${colors.white};

  @media ${device.tablet} {
    padding: 5rem 1rem;
  }
`

const InteriorWrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
`

const ServicesWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  background-color: ${colors.dodgerBlue};
  border-radius: 3px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`
const Service = styled.div`
  padding: 3rem 4rem;
  margin: 2rem 0;
  width: 50%;
  text-align: center;
  position: relative;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 100%;
    padding: 3rem 2rem;
  }
`

const RulerIcon = styled.img`
  color: ${colors.white};
  height: 60px;
`
const CodeIcon = styled.img`
  color: ${colors.white};
  height: 60px;
`
const DesignService = Service.extend`
  color: ${colors.white};
  border-right: 1px solid rgba(255, 255, 255, 0.6);

  @media ${device.tablet} {
    border: none;
  }
  h3 {
    margin-top: 0.4rem;
  }
`
const DevelopService = Service.extend`
  color: ${colors.white};

  h3 {
    margin-top: 0.4rem;
  }
`

const ServicesHeader = styled.h2`
  margin-bottom: 1.5rem;
  color: ${colors.martinique};
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
const ServicesDescription = styled.p`
  color: ${colors.dolphin};
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
`

const ServiceHeader = styled.h3`
  font-size: 28px;
  color: ${colors.white};
  text-transform: uppercase;
`

// const ServiceSubHeader = styled.h4`
//   font-size: 22px;
// `

// const ServiceList = styled.ul``

const ServiceDescription = styled.p`
  color: ${colors.white};
  font-weight: 300;
`

const LetsTalk = styled.a`
  color: ${colors.dodgerBlue};
`
