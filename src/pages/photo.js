import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/navbar.js'

import '../styles/index.scss'

import dogge from '../assets/photography/dogge.jpg'
import girderBoi from '../assets/photography/girderBoi.jpg'
import cows from '../assets/photography/cows.jpg'
import woodBikes from '../assets/photography/woodBikes.jpg'
import chinatown from '../assets/photography/chinatown.jpg'
import oldBlueCar from '../assets/photography/oldBlueCar.jpg'
import sittingBoy from '../assets/photography/sittingBoy.jpg'
import carmagnoleGrid from '../assets/photography/carmagnoleGrid.jpg'
import beerStoreGrid from '../assets/photography/beerStoreGrid.jpg'


export default ({ data }) =>
  <div className="mainContainer">
    <Navbar/>
    <img src={dogge} className="photo dogge"/>
    <img src={girderBoi} className="photo girderBoi"/>
    <img src={cows} className="photo cows"/>
    <img src={woodBikes} className="photo woodBikes"/>
    <img src={chinatown} className="photo chinatown"/>
    <img src={oldBlueCar} className="photo oldBlueCar"/>
    <img src={sittingBoy} className="photo sittingBoy"/>
    <img src={carmagnoleGrid} className="photo carmagnoleGrid"/>
    <img src={beerStoreGrid} className="photo beerStoreGrid"/>
  </div>