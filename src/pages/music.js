import React from 'react'
import Navbar from '../components/navbar.js'
import Img from 'gatsby-image'
// import recordingsList from '../assets/recordingsList'
import RecordingsList from '../components/recordingsList'
import Layout from '../components/layout.js'
import { graphql } from 'gatsby'

import '../styles/music.css'
import '../styles/mainContainer.css'

export default ({ data }) => (
  <Layout>
    <div>
      <Navbar />
      <Img
        style={{ marginBottom: 20 }}
        className="top-image"
        sizes={data.allContentfulMusicImage.edges[0].node.image.sizes}
      />
      <RecordingsList recordings={data.allContentfulRecording.edges} />
    </div>
  </Layout>
)

export const query = graphql`
  query MusicImageQuery {
    allContentfulMusicImage {
      edges {
        node {
          id
          image {
            sizes(maxWidth: 2000) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
    allContentfulRecording {
      edges {
        node {
          url {
            url
          }
          title
          type
          id
        }
      }
    }
  }
`
