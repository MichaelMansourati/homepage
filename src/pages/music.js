import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../components/navbar.js'

import '../styles/music.scss'
import '../styles/mainContainer.scss'

const musicPage = () =>
  <div className="mainContainer">
    <Navbar/>
    <div className="soundcloudLinks">
      <iframe className="soundCloud" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340047321&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
      <br/>
      <iframe className="soundCloud" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340047186&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
      <br/>
      <iframe className="soundCloud" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340045841&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
      <br/>
      <iframe className="soundCloud" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340044026&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
    </div>
    <div className="vimeoLinks">
      <iframe src="https://player.vimeo.com/video/155124834" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
    <div className="youtubeLinks">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/MFOT08oMbxE" frameborder="0" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Ihl4hZGy3pk" frameborder="0" allowfullscreen></iframe>
    </div>
    <div className="vimeoLinks">
      <iframe src="https://player.vimeo.com/video/119555314" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
  </div>

export default musicPage