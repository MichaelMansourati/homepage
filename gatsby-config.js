
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Michael Mansourati`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qs20qkelblz6`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photography`,
        path: `${__dirname}/src/assets/photography`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `indexImage`,
        path: `${__dirname}/src/assets/indexImage`
      }
    },
        {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `musicImage`,
        path: `${__dirname}/src/assets/musicImage`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `siteScreenshots`,
        path: `${__dirname}/src/assets/siteScreenshots`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
