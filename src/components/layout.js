import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery } from 'gatsby'

import Header from './header'
import '../assets/css/layout.css'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
