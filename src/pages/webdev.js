import React from 'react'
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
      <ProjectsList projects={data.allContentfulProject.edges} />
    </div>
  </Layout>
)

export const query = graphql`
  query projects {
  allContentfulProject {
    edges {
      node {
        id
        githubRepo
        title
        description {
          description
          id
        }
        images {
           sizes {
            sizes
            aspectRatio
            src
            srcSet
            base64
          }
          id
        }
      }
    }
  }
}
`
