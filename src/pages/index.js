import React from 'react'

import Layout from '../components/layout'
import Services from '../components/services'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'

const IndexPage = () => (
  <Layout>
    <Services />
    <About />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
