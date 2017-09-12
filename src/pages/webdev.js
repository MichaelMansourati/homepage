import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/navbar.js'

import '../styles/webdev.scss'

const webDevPage = () =>
  <div className="mainContainer">
    <Navbar/>
    <br/>
    <div className="colourscapeProject">
      <h3>COLOURSCAPE</h3>
      <span>Browse Toronto and its various neighbourhoods by your favourite colour palette.</span>
      <br/>
      <a href='https://github.com/MichaelMansourati/colourscape-react'>COLOURSCAPE Github</a>
      <br/>
      <br/>
      <img className='webdevImg' src="https://cloud.githubusercontent.com/assets/14142540/25882701/74330784-3513-11e7-849c-c14964041daa.png"/>
      <img className='webdevImg' src="https://cloud.githubusercontent.com/assets/14142540/25882698/71c2b9ae-3513-11e7-86a0-744627f22219.png"/>
    </div>
  </div>


export default webDevPage