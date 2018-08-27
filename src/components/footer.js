import React from 'react'
import styled from 'styled-components'
import colors from '../utilities/colors'
import { device } from '../utilities/breakpoints'

const Footer = () => (
  <Wrapper>
    <InteriorWrapper>
      <Section>
        <h3>Ian Mackenzie</h3>
        <p>a development and design studio.</p>
      </Section>
      <Section>
        <h4>
          <Facebook
            href="https://www.facebook.com/ian.mackenzie.06"
            target="_blank"
            title="Facebook"
          >
            Facebook
          </Facebook>
        </h4>
        <h4>
          <LinkedIn
            href="https://www.linkedin.com/in/donald-mackenzie-b6737484/"
            target="_blank"
            title="LinkedIn"
          >
            LinkedIn
          </LinkedIn>
        </h4>
      </Section>
      <Section>
        <h3>Denver, CO 80221</h3>
      </Section>
    </InteriorWrapper>
  </Wrapper>
)

export default Footer

const Wrapper = styled.div`
  background-color: ${colors.woodsmoke};
  color: ${colors.white};
`

const InteriorWrapper = styled.div`
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  margin: 0 auto;

  @media ${device.tablet} {
    flex-direction: column;
  }
`
const Section = styled.div`
  text-align: center;
  width: 33%;

  @media ${device.tablet} {
    width: 100%;
  }

  h3 {
    margin-bottom: 0;
  }

  h4 {
    margin: 0.5rem;
  }

  p {
    color: ${colors.dolphin};
    margin: 0;
  }
`
const Facebook = styled.a`
  color: ${colors.white};
  text-decoration: none;
  display: block;
  transition: 0.3s all ease;
  &:hover {
    color: #4267b2;
  }
`

const LinkedIn = styled.a`
  color: ${colors.white};
  text-decoration: none;
  display: block;
  transition: 0.3s all ease;
  &:hover {
    color: #283e4a;
  }
`

// const Instagram = styled.a`
//   color: ${colors.white};

//   &:hover {
//     background-color: #4267b2;
//   }
// `
