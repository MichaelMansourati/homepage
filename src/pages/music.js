import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../components/navbar.js'
import Img from 'gatsby-image'


import '../styles/music.css'
import '../styles/mainContainer.css'

export default ({ data }) => (
  <div className="main-container">
    <Navbar />
    <Img style={{ marginBottom: 20 }} className="top-image" sizes={data.allFile.edges[0].node.childImageSharp.sizes} />
    <div className="youtubeLinks">
      <iframe
        width="560"
        height="315"
        className="youtubeIframe"
        src="https://www.youtube.com/embed/wV8rK7UTYcA"
        frameborder="0"
        allowfullscreen
      />
    </div>
    <div className="soundcloudLinks">
      <iframe
        className="soundCloud"
        height="166"
        scrolling="no"
        frameborder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/349365021&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
      />
      <br />
      <iframe
        className="soundCloud"
        height="166"
        scrolling="no"
        frameborder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340047321&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
      />
      <br />
      <iframe
        className="soundCloud"
        height="166"
        scrolling="no"
        frameborder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340047186&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
      />
      <br />
      <iframe
        className="soundCloud"
        height="166"
        scrolling="no"
        frameborder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340045841&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
      />
      <br />
      <iframe
        className="soundCloud"
        height="166"
        scrolling="no"
        frameborder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340044026&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
      />
    </div>
    <div className="vimeoLinks">
      <iframe
        className="vimeoIframe"
        src="https://player.vimeo.com/video/155124834"
        width="640"
        height="360"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      />
    </div>
    <div className="youtubeLinks">
      <iframe
        className="youtubeIframe"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/MFOT08oMbxE"
        frameborder="0"
        allowfullscreen
      />
      <iframe
        className="youtubeIframe"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Ihl4hZGy3pk"
        frameborder="0"
        allowfullscreen
      />
    </div>
    <div className="vimeoLinks">
      <iframe
        className="vimeoIframe"
        src="https://player.vimeo.com/video/119555314"
        width="640"
        height="360"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      />
    </div>
  </div>
)

export const query = graphql`
  query MusicImageQuery {
    allFile(filter: {
      sourceInstanceName:{
        regex: "/musicImage/"
      }
    }) {
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
