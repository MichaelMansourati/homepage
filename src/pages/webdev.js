import React from 'react'
import projects from '../assets/webProjectsList.js'
import { graphql } from 'gatsby'

import ProjectsList from '../components/ProjectsList.js'
import Layout from '../components/layout.js'
import Navbar from '../components/navbar.js'

import '../styles/webdev.css'

export default ({ data }) => (
  <Layout>
    <div>
      <Navbar />
      <br />
      <ProjectsList projectsArr={projects} data={data.allFile.edges} />
    </div>
  </Layout>
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
