import CSDash from "./assets/siteScreenshots/Colourscape/colourscapeDashboard.png"
import CSHome from "./assets/siteScreenshots/Colourscape/colourscapeDashboard.png"
import KSHome from "./assets/siteScreenshots/KeithStratton/KeithStrattonHome.png"
import KSLOW from "./assets/siteScreenshots/KeithStratton/KeithStrattonListOfWorks.png"
import ECSplash from "./assets/siteScreenshots/EarCamera/EarCameraSplash.png"
import ECAbout from "./assets/siteScreenshots/EarCamera/EarCameraAbout.png"

module.exports = {
  projects: [
  {
    title: "KEITHSTRATTON.COM",
    description: "A website I built using the React.js based static site framework Gatsby.js for my friend Keith Stratton",
    link: "http://keithstratton.com",
    images: [KSHome, KSLOW]
  },
  {
    tile: "EAR.CAMERA",
    description: "A website I built using the React.js based static site framework Gatsby.js for the contemporary music collective Ear Camera, of which I am a part.",
    link: "http://ear.camera",
    images: [ECSplash, ECAbout]
  },
  {
    title: "COLOURSCAPE",
    description: "Browse Toronto and its various neighbourhoods by your favourite colour palette."
    github: "https://github.com/MichaelMansourati/colourscape-react",
    images: [CSHome, CSDash]
  }
  ]
}