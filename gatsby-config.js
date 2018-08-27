module.exports = {
  siteMetadata: {
    title: 'Ian Mackenzie',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utilities/typography.js',
      },
    },
  ],
}
