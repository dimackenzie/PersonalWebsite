import React from 'react'
import styled from 'styled-components'
import colors from '../utilities/colors'
import IntoView from '../utilities/IntoView'
import { device } from '../utilities/breakpoints'

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
              <ContactButton type="submit">Send Message</ContactButton>
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
  background-color: ${colors.white};

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
const ContactDescription = styled.p`
  color: ${colors.dolphin};
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
`

const ContactCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.catskillWhite};
  border-radius: 3px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
  padding: 2rem;

  @media ${device.tablet} {
    padding: 2rem 0.5rem;
  }

  p {
    color: ${colors.dolphin};
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
  color: ${colors.dolphin};
  display: block;
  margin-bottom: 0.3rem;
`

const Input = styled.input`
  color: ${colors.gunPowder};
  border: none;
  padding: 1rem;
  font-size: 20px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);

  &:active:before,
  &:focus:before {
    content: '';
    background-color: ${colors.dodgerBlue};
    width: 5px:
    height: 100%:
    position: absolute;
  }
`
const Textarea = styled.textarea`
  color: ${colors.dolphin};
  border: none;
  padding: 1rem;
  font-size: 20px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
`

const ButtonGroup = styled.div`
  margin-left: 2rem;
  margin-bottom: 2rem;
`

const ContactButton = styled.button`
  color: ${colors.white};
  background-color: ${colors.dodgerBlue};
  border: none;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 16px;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: 0.3s all;

  &:hover {
    background-color: ${colors.dodgerBlue};
    box-shadow: none;
    border-bottom: none;
  }

  &:active {
    background-color: ${colors.dodgerBlue};
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
    border-bottom: none;
  }
`
