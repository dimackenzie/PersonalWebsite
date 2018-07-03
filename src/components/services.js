import React from 'react'
import styled from 'styled-components'
import colors from '../utilities/colors'
import IntoView from '../utilities/IntoView'

const Wrapper = styled.div`
  margin: 10rem auto;
  max-width: 960px;
`
const ServicesWrapper = styled.div`
  display: flex;
`
const Service = styled.div`
  padding: 2rem;
  text-align: center;
  position: relative;

  &:first-of-type {
    background-color: ${colors.mediumGrey};
    margin-right: 3rem;
    box-shadow: -1px 0px 3px -4px rgba(0, 0, 0, 0.5);
  }

  &:first-of-type::after {
    content: ' ';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: #212121;
    transform-origin: bottom left;
    transform: skew(-10deg, 0deg);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
`

const ServicesHeader = styled.h2`
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

const ServiceHeader = styled.h3`
  color: ${colors.white};
  text-transform: uppercase;
`

const ServiceDescription = styled.p`
  color: ${colors.white};
`

const Services = () => (
  <Wrapper>
    <IntoView direction="zoom-in">
      <ServicesHeader>Services</ServicesHeader>
      <ServicesWrapper>
        <Service>
          <ServiceHeader>Design</ServiceHeader>
          <ServiceDescription>
            This is a little bit about me. Fingerstache paleo iceland everyday
            carry pop-up dreamcatcher gentrify literally vaporware helvetica
            migas aesthetic gochujang activated charcoal. Direct trade taxidermy
            skateboard seitan chambray pork belly offl cliche actually taiyaki
            photo booth.
          </ServiceDescription>
        </Service>
        <Service>
          <ServiceHeader>Development</ServiceHeader>
          <ServiceDescription>
            This is a little bit about me. Fingerstache paleo iceland everyday
            carry pop-up dreamcatcher gentrify literally vaporware helvetica
            migas aesthetic gochujang activated charcoal. Direct trade taxidermy
            skateboard seitan chambray pork belly offl cliche actually taiyaki
            photo booth.
          </ServiceDescription>
        </Service>
      </ServicesWrapper>
    </IntoView>
  </Wrapper>
)

export default Services
