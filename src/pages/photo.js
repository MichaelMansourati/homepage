import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/navbar.js'

import "../styles/photo.scss"

const photoPage = () =>
  <div className="mainContainer">
    <Navbar/>
    <img src="https://i.imgur.com/yIzaPij.jpg" className="photo dogge"/>
    <img src="https://i.imgur.com/MEaDfFP.jpg" className="photo girderBoi"/>
    <img src="https://i.imgur.com/R8CmgKp.jpg" className="photo cows"/>
    <img src="https://i.imgur.com/SAcydqj.jpg" className="photo woodBikes"/>
    <img src="https://i.imgur.com/Hn4qTke.jpg" className="photo chinatown"/>
    <img src="https://i.imgur.com/d9ygEmT.jpg" className="photo oldBlueCar"/>
    <img src="https://i.imgur.com/u1l3Kbf.jpg" className="photo sittingBoy"/>
    <img src="https://i.imgur.com/DS4EmYG.jpg" className="photo CarmagnoleGrid"/>
    <img src="https://i.imgur.com/nf2gilz.jpg" className="photo beerStoreGrid"/>
  </div>

export default photoPage