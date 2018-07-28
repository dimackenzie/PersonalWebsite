import React from 'react'
import styled from 'styled-components'
import colors from '../utilities/colors'
import IntoView from '../utilities/IntoView'
import { device } from '../utilities/breakpoints'

const Wrapper = styled.div`
  margin: 20rem auto 10rem;
  max-width: 960px;
  padding: 1rem;

  @media ${device.tablet} {
    margin: 10rem auto 5rem;
  }

  @media ${device.mobileM} {
    margin: 5rem auto;
  }
`

const ContactHeader = styled.h2`
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
const ContactCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #212121;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  padding: 0 2rem;

  @media ${device.mobileM} {
    padding: 0;
  }

  p {
    color: ${colors.white};
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
  color: ${colors.white};
  display: block;
  margin-bottom: 0.3rem;
`

const Input = styled.input`
  background-color: ${colors.lightGrey};
  border: none;
  padding: 1rem;
  font-size: 20px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
`
const Textarea = styled.textarea`
  background-color: ${colors.lightGrey};
  border: none;
  padding: 1rem;
  font-size: 20px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
`

const ButtonGroup = styled.div`
  margin-left: 2rem;
  margin-bottom: 2rem;
`

const ContactButton = styled.button`
  color: ${colors.white};
  background-color: ${colors.lightGrey};
  border: none;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: 0.3s all;

  &:hover {
    background-color: ${colors.teal};
    box-shadow: none;
    border-bottom: none;
  }

  &:active {
    background-color: ${colors.teal};
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
    border-bottom: none;
  }
`

const Contact = () => (
  <Wrapper>
    <IntoView direction="fade-left">
      <ContactHeader>Contact</ContactHeader>
      <ContactCard>
        <p>
          Leave me a message, let's work together to make a product both you,
          and I are proud of.
        </p>
        <form action="POST">
          <FormGroupHalf>
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="Name" />
          </FormGroupHalf>
          <FormGroupHalf>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" />
          </FormGroupHalf>
          <FormGroupFull>
            <Label htmlFor="message">Message</Label>
            <Textarea name="message" />
          </FormGroupFull>
          <ButtonGroup>
            <ContactButton>Send Message</ContactButton>
          </ButtonGroup>
        </form>
      </ContactCard>
    </IntoView>
  </Wrapper>
)

export default Contact
