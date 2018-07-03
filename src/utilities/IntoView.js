import React, { Component } from 'react'
import AOS from 'aos'
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
    return <div data-aos={direction}>{children}</div>
  }
}
