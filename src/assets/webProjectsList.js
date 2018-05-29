import CSDash from './siteScreenshots/Colourscape/colourscapeDashboard.png'
import CSHome from './siteScreenshots/Colourscape/colourscapeDashboard.png'
import KSHome from './siteScreenshots/KeithStratton/KeithStrattonHome.png'
import KSLOW from './siteScreenshots/KeithStratton/KeithStrattonListOfWorks.png'
import ECSplash from './siteScreenshots/EarCamera/EarCameraSplash.png'
import ECAbout from './siteScreenshots/EarCamera/EarCameraAbout.png'

module.exports = [
  {
    title: 'KEITHSTRATTON.COM',
    description:
      'A website I built for a friend and colleague using Gatsby.js, a static site generator built on React.js.',
    images: [KSHome, KSLOW],
  },
  {
    title: 'EAR.CAMERA',
    description:
      'A website I built using the React.js based static site framework Gatsby.js for the contemporary music collective Ear Camera, of which I am a part.',
    link: 'http://ear.camera',
    github: 'https://github.com/MichaelMansourati/earcamera',
    images: [ECSplash, ECAbout],
  },
  {
    title: 'COLOURSCAPE',
    description:
      'Browse Toronto and its various neighbourhoods by your favourite colour palette.',
    github: 'https://github.com/MichaelMansourati/colourscape-react',
    images: [CSHome, CSDash],
  },
]

// export const query = graphql`
//   query screenshots {

//   }