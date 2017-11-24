import React from 'react'
import Link from 'gatsby-link'

import Navbar from '../components/navbar.js'

import '../styles/index.scss'

import dogge from '../images/dogge.jpg'
import girderBoi from '../images/girderBoi.jpg'
import cows from '../images/cows.jpg'
import woodBikes from '../images/woodBikes.jpg'
import chinatown from '../images/chinatown.jpg'
import oldBlueCar from '../images/oldBlueCar.jpg'
import sittingBoy from '../images/sittingBoy.jpg'
import carmagnoleGrid from '../images/carmagnoleGrid.jpg'
import beerStoreGrid from '../images/beerStoreGrid.jpg'


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