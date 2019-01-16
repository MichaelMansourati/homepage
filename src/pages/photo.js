import React from 'react'
import ImagesList from '../components/ImagesList.js'
import Layout from '../components/layout.js'
import { graphql } from 'gatsby'

import Navbar from '../components/navbar.js'

import '../styles/index.css'

export default ({ data }) => {
  const imgArr = data.allContentfulPhotographyImages.edges.sort((a, b) =>
    a.node.name.localeCompare(b.node.name)
  )
  return (
    <Layout>
      <div>
        <Navbar />
        <ImagesList imgArr={imgArr} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PhotographyQuery {
    allContentfulPhotographyImages {
      edges {
        node {
          name
          image {
            id
            sizes(maxWidth: 2000) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
  }
`
