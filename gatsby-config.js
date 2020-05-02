/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Michal Antczak Gatsby tutorial",
    description:
      "This is personal learning process to grasp Gatsby fundamentals and quickly build awesome porjects",
    objectives: [
      "Build apps",
      "Make mony on building apps",
      "Rock web dev industry",
    ],
    personalData: {
      name: "Michal",
      surname: "Antczak",
      born: "14-09-1985",
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `8sfwl57wotbn`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_TOKEN,
      },
    },
  ],
}
