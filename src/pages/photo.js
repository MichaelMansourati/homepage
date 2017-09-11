import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/navbar.js'

const photoPage = () =>
  <div className="mainContainer">
    <Navbar/>
    <img src="https://i.imgur.com/yIzaPij.jpg" className="photo dogge"/>
    <img src="https://i.imgur.com/DS4EmYG.jpg" className="photo CarmagnoleGrid"/>
    <img src="https://i.imgur.com/M70Gnwc.jpg" className="photo girderBoi"/>
    <img src="https://i.imgur.com/nf2gilz.jpg" className="photo beerStoreGrid"/>
  </div>

export default photoPage