import React from 'react'
import Link from 'gatsby-link'
import projects from '../assets/webProjectsList.js'
import Img from 'gatsby-image'

import ProjectsList from '../components/ProjectsList.js'
import Navbar from '../components/navbar.js'

import '../styles/webdev.css'

export default ({ data }) => (
  <div>
    <Navbar />
    <br />
    <ProjectsList projectsArr={projects} data={data.allFile.edges} />
  </div>
)

export const query = graphql`
  query screenshots {
    allFile(
      sort: { fields: [id], order: ASC }
      filter: { sourceInstanceName: { regex: "/siteScreenshots/" } }
    ) {
      edges {
        node {
          relativeDirectory
          childImageSharp {
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    }
  }
`
