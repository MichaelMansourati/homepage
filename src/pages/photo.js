import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import ImagesList from '../components/ImagesList.js'

import Navbar from '../components/navbar.js'

import '../styles/index.css'

export default ({ data }) => (
  <div>
    <Navbar />
    <ImagesList imgArr={data.allFile.edges} />
  </div>
)

export const query = graphql`
  query PhotographyQuery {
    allFile(
      sort: { fields: [id], order: ASC }
      filter: { sourceInstanceName: { regex: "/photography/" } }
    ) {
      edges {
        node {
          childImageSharp {
            internal {
              contentDigest
            }
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    }
  }
`
