import React from 'react'
import styled from 'styled-components'
import { colors } from '../utilities/colors'
import IntoView from '../utilities/IntoView'
import { device } from '../utilities/breakpoints'
import PencilRuler from '../assets/images/pencilRuler.svg'
import Code from '../assets/images/code.svg'
import Gears from '../assets/images/cogs-solid.svg'
import purpPinstripe from '../assets/images/purpPinstripe.svg'
import useColorTransition from '../hooks/useColorTransition'

const Services = () => {
  const [container, rgb] = useColorTransition(
    [68, 46, 233],
    [141, 128, 238],
    0.025
  )

  return (
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
          <ServicesWrapper
            innerRef={container}
            style={{
              backgroundColor: rgb,
            }}
          >
            <DesignService>
              <RulerIcon src={PencilRuler} alt="Design" />
              <ServiceHeader>Design</ServiceHeader>
              <ServiceDescription>
                From planning and building a sites layout and structure, to
                implementing interactivity and funtionality, I work with you to
                design the visual layer.
              </ServiceDescription>
            </DesignService>
            <DevelopService>
              <CodeIcon src={Code} alt="Develop" />
              <ServiceHeader>Develop</ServiceHeader>
              <ServiceDescription>
                Here's where we bring those ideas and designs to life. Utilizing
                HTML, CSS, and Javascript, I build fast, secure, and interactive
                websites.
              </ServiceDescription>
            </DevelopService>
            <MaintainService>
              <CodeIcon src={Gears} alt="Maintain" />
              <ServiceHeader>Maintain</ServiceHeader>
              <ServiceDescription>
                Don't have anyone to host your site and keep it updated? I can
                take care of all the maintenance to ensure your site is safe and
                secure.
              </ServiceDescription>
            </MaintainService>
          </ServicesWrapper>
        </IntoView>
      </InteriorWrapper>
    </Wrapper>
  )
}

export default Services

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 15rem 1rem;
  background-color: ${colors.primary.white};

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
  border-radius: 15px;
  transition: 0.1s all;
  will-change: background;

  @media ${device.tablet} {
    flex-direction: column;
  }
`
const Service = styled.div`
  padding: 3rem 3rem;
  margin: 2rem 0;
  width: 50%;
  text-align: center;
  position: relative;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 100%;
    padding: 2rem;
    margin: 0;
  }
`

const RulerIcon = styled.img`
  color: ${colors.primary.white};
  height: 60px;
  margin-bottom: 0.2rem;
`
const CodeIcon = styled.img`
  color: ${colors.primary.white};
  height: 60px;
  margin-bottom: 0.2rem;
`
const DesignService = Service.extend`
  color: ${colors.primary.white};
  border-right: 1px solid rgba(255, 255, 255, 0.6);

  @media ${device.tablet} {
    border: none;
  }
  h3 {
    margin-top: 0.4rem;
  }
`
const DevelopService = Service.extend`
  color: ${colors.primary.white};
  border-right: 1px solid rgba(255, 255, 255, 0.6);

  h3 {
    margin-top: 0.4rem;
  }
`

const MaintainService = Service.extend`
  color: ${colors.primary.white};

  h3 {
    margin-top: 0.4rem;
  }
`

const ServicesHeader = styled.h2`
  margin-bottom: 1.5rem;
  color: ${colors.gray.dark};
  position: relative;
  text-transform: uppercase;
  text-align: center;
  font-size: 50px;
  z-index: 100;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: -50%;
    left: 0;
    bottom: 0;
    background-image: url(${purpPinstripe});
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }
`
const ServicesDescription = styled.p`
  color: ${colors.gray.light};
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
`

const ServiceHeader = styled.h3`
  font-size: 28px;
  color: ${colors.white};
  text-transform: uppercase;
`

const ServiceDescription = styled.p`
  color: ${colors.white};
  font-weight: 300;
`

const LetsTalk = styled.a`
  color: ${colors.primary.darkPurple};
`
