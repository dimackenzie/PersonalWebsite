import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import fav from '../assets/images/favicon-16x16.png'
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
            {
              name: 'description',
              content:
                'Ian Mackenzie Development is a full service design and development agency',
            },
            {
              name: 'keywords',
              content:
                'Websites, Website Design, Website Development, Ian Mackenzie, Design, Development',
            },
          ]}
          link={[{ rel: 'shortcut icon', type: 'image/png', href: `${fav}` }]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Layout
