import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/navbar.js'

import '../styles/webdev.css'

export default () => (
  <div className="mainContainer">
    <Navbar />
    <br />
    <div className="project">
      <h3>EAR CAMERA</h3>
      <span>
        A website I built using the React.js based static site framework
        Gatsby.js for the contemporary music collective Ear Camera, of which I
        am a part.
      </span>
      <br />
      <a href="https://github.com/MichaelMansourati/earcamera">
        Ear Camera Github
      </a>
      <br />
      <br />
      <img className="webdevImg" src="https://i.imgur.com/CcC34R0.png" />
      <img className="webdevImg" src="https://i.imgur.com/07Ccj9B.png" />
    </div>
    <div className="project">
      <h3>COLOURSCAPE</h3>
      <span>
        Browse Toronto and its various neighbourhoods by your favourite colour
        palette.
      </span>
      <br />
      <a href="https://github.com/MichaelMansourati/colourscape-react">
        COLOURSCAPE Github
      </a>
      <br />
      <br />
      <img
        className="webdevImg"
        src="https://cloud.githubusercontent.com/assets/14142540/25882701/74330784-3513-11e7-849c-c14964041daa.png"
      />
      <img
        className="webdevImg"
        src="https://cloud.githubusercontent.com/assets/14142540/25882698/71c2b9ae-3513-11e7-86a0-744627f22219.png"
      />
    </div>
  </div>
)
