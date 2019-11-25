import React, { Component } from 'react'
import AOS from 'aos'
import styled from 'styled-components'
import 'aos/dist/aos.css'

export default class IntoView extends Component {
  static defaultProps = {
    direction: 'fade-down',
  }

  componentDidMount = () => {
    AOS.init()
  }

  render() {
    const { children, direction } = this.props
    return (
      <IntoViewWrapper data-aos={direction} data-aos-once="true">
        {children}
      </IntoViewWrapper>
    )
  }
}

const IntoViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
