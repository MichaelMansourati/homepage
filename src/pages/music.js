import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../components/navbar.js'
import Img from 'gatsby-image'
import recordingsList from '../assets/recordingsList'
import RecordingsList from '../components/recordingsList'

import '../styles/music.css'
import '../styles/mainContainer.css'

export default ({ data }) => (
  <div>
    <Navbar />
    <Img
      style={{ marginBottom: 20 }}
      className="top-image"
      sizes={data.allFile.edges[0].node.childImageSharp.sizes}
    />
    <RecordingsList recordings={recordingsList} />
  </div>
)

export const query = graphql`
  query MusicImageQuery {
    allFile(filter: { sourceInstanceName: { regex: "/musicImage/" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    }
  }
`
