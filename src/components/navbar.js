import React from 'react'
import Link from 'gatsby-link'

import '../styles/navbar.css'

const Navbar = () => (
  <span className="navbar">
    <Link className="leftSideLink" to="/">
      Michael Mansourati
    </Link>
    <Link className="leftSideLink" to="/webdev/">
      web dev
    </Link>
    <Link className="leftSideLink" to="/music/">
      music
    </Link>
    <Link className="leftSideLink" to="/photo/">
      photo
    </Link>
    <a className="rightSideLink link" href="mailto:mail@michaelmansourati.com">
      contact me
    </a>
    <a
      className="rightSideLink link"
      href="https://www.github.com/michaelmansourati"
    >
      github
    </a>
  </span>
)

export default Navbar
