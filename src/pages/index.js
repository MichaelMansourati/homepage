import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../components/navbar.js'
import Img from 'gatsby-image'

import '../styles/index.css'
import '../styles/mainContainer.css'

export default ({ data }) => (
  <div className="mainContainer">
    <Img
      className="topImage"
      id="index-top-image"
      sizes={data.file.childImageSharp.sizes}
    />
    <div className="textContainer">
      <Link className="homeLink" to="/">
        <h1 id="myName">Michael Mansourati</h1>
      </Link>
      <div className="indexNav">
        <Link className="leftSideLink link" to="/webdev/">
          web dev
        </Link>
        <Link className="leftSideLink link" to="/music/">
          music
        </Link>
        <Link className="leftSideLink link" to="/photo/">
          photo
        </Link>
        <a
          className="rightSideLink link"
          href="mailto:mail@michaelmansourati.com"
        >
          contact me
        </a>
        <a
          className="rightSideLink link"
          href="https://www.github.com/michaelmansourati"
        >
          github
        </a>
      </div>
    </div>
  </div>
)

export const query = graphql`
  query IndexImageQuery {
    file(relativePath: { eq: "selfie.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
  }
`
