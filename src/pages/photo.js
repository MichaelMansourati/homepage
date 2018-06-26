import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Navbar from '../components/navbar.js'

import '../styles/index.css'

function ImagesList(props) {
  const imgList = props.imgArr.map(
    img =>
      img.node.childImageSharp && (
        <Img
          key={img.node.childImageSharp.internal.contentDigest}
          style={{ width: 800, marginBottom: 8 }}
          sizes={img.node.childImageSharp.sizes}
          className="photo"
        />
      )
  )
  return <div>{imgList}</div>
}

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
