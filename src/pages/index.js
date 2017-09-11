import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../components/navbar.js'

import '../styles/index.scss'
import '../styles/mainContainer.scss'

const IndexPage = () =>
  <div className="mainContainer">
    <img className="topImage" src="https://i.imgur.com/oIlNfig.jpg" />
    <div className="textContainer">
      <Link className='homeLink' to='/'>
        <h1 id="myName" >Michael Mansourati</h1>
      </Link>
      <div className="indexNav">
        <Link className="leftSideLink link" to='/webdev/'>web dev</Link>
        <Link className="leftSideLink link" to='/music/'>music</Link>
        <Link className="leftSideLink link" to='/photo/'>photo</Link>
        <a className="rightSideLink link" href="mailto:mail@michaelmansourati.com">contact me</a>
        <a className="rightSideLink link" href="https://www.github.com/michaelmansourati">github</a>
      </div>
    </div>
  </div>


export default IndexPage
