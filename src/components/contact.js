import React from 'react'
import styled from 'styled-components'
import { colors } from '../utilities/colors'
import IntoView from '../utilities/IntoView'
import { device } from '../utilities/breakpoints'
import purpPinstripe from '../assets/images/purpPinstripe.svg'

const Contact = () => (
  <Wrapper id="contact">
    <InteriorWrapper>
      <IntoView direction="fade-left">
        <ContactHeader>Contact</ContactHeader>
        <ContactDescription>
          Interested in working together or want to view some of my past work?
          Let's chat. Leave me a message below.
        </ContactDescription>
        <ContactCard>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <label hidden>
              Don’t fill this out: <input name="bot-field" />
            </label>
            <FormGroupHalf>
              <Label htmlFor="name">Name</Label>
              <Input type="text" name="name" id="name" required />
            </FormGroupHalf>
            <FormGroupHalf>
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" id="email" required />
            </FormGroupHalf>
            <FormGroupFull>
              <Label htmlFor="message">Message</Label>
              <Textarea name="message" id="message" />
            </FormGroupFull>
            <ButtonGroup>
              <ContactButton type="submit">Send</ContactButton>
            </ButtonGroup>
          </form>
        </ContactCard>
      </IntoView>
    </InteriorWrapper>
  </Wrapper>
)

export default Contact

const Wrapper = styled.div`
  padding: 12rem 1rem;
  margin: 0 auto;
  background-color: ${colors.primary.white};

  @media ${device.tablet} {
    padding: 5rem 1rem;
  }
`

const InteriorWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const ContactHeader = styled.h2`
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
const ContactDescription = styled.p`
  color: ${colors.gray.light};
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
`

const ContactCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;

  @media ${device.tablet} {
    padding: 2rem 0.5rem;
  }

  p {
    color: ${colors.gray.light};
    display: block;
    padding-top: 1rem;
    padding-left: 2rem;

    @media ${device.tablet} {
      padding: 1rem 2rem;
    }
  }
`

const FormGroupHalf = styled.div`
  width: 50%;
  display: inline-block;
  padding: 2rem;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 100%;
    padding: 0.5rem 2rem;
  }
`

const FormGroupFull = styled.div`
  width: 100%;
  display: inline-block;
  padding: 2rem;
  box-sizing: border-box;

  @media ${device.tablet} {
    padding: 0.5rem 2rem 2rem;
  }
`

const Label = styled.label`
  color: ${colors.gray.dark};
  font-weight: 700;
  display: block;
  margin-bottom: 0.3rem;
`

const Input = styled.input`
  color: ${colors.gray.light};
  border: 4px solid ${colors.primary.green};
  padding: 1rem;
  font-size: 20px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;

  &:active:before,
  &:focus:before {
    content: '';
    background-color: ${colors.dodgerBlue};
    width: 5px;
    height: 100%;
    position: absolute;
  }
`
const Textarea = styled.textarea`
  color: ${colors.gray.light};
  border: 4px solid ${colors.primary.green};
  padding: 1rem;
  font-size: 20px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
`

const ButtonGroup = styled.div`
  margin-left: 2rem;
  margin-bottom: 2rem;
`

const ContactButton = styled.button`
  color: ${colors.gray.dark};
  background-color: ${colors.primary.green};
  border: none;
  padding: 1rem 1.5rem;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  transition: 0.3s all;

  &:hover {
    background-color: ${colors.primary.green};
  }

  &:active {
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
    border-bottom: none;
  }
`
