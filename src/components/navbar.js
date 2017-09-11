import React from "react"
import Link from "gatsby-link"

import '../styles/navbar.scss'

const Navbar = () =>
  <span className="navbar">
    <Link className="link" to='/'>Michael Mansourati</Link>
    <Link className="link" to='/webdev/'>web dev</Link>
    <Link className="link" to='/music/'>music</Link>
    <Link className="link" to='/photo/'>photo</Link>
  </span>

  export default Navbar