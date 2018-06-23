import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../components/navbar.js'
import Img from 'gatsby-image'
import recordingsList from '../assets/recordingsList'

import '../styles/music.css'
import '../styles/mainContainer.css'

const RecordingsList = props => {
  const listRecordings = props.recordings.map(rec => {
    if (rec.type === 'youtube') {
      return (
        <iframe
          width="560"
          height="315"
          className="youtubeIframe"
          src={rec.src}
          frameborder="0"
          allowfullscreen
        />
      )
    } else if (rec.type === 'soundcloud') {
      return (
        <iframe
          className="soundCloud"
          height="166"
          scrolling="no"
          frameborder="no"
          src={rec.src}
        />
      )
    } else if (rec.type === 'vimeo') {
      return (
        <iframe
          className="vimeoIframe"
          src={rec.src}
          width="640"
          height="360"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
      )
    }
  })
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {listRecordings}
    </div>
  )
}

export default ({ data }) => (
  <div className="main-container">
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
