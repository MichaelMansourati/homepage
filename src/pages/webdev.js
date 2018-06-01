import React from 'react'
import Link from 'gatsby-link'
import projects from '../assets/webProjectsList.js'
import Img from 'gatsby-image'

import Navbar from '../components/navbar.js'

import '../styles/webdev.css'

const ProjectsList = props => {
  const projectsArr = props.projectsArr
  projectsArr.forEach(e => {
    props.data.forEach(d => {
      if (d.node.relativeDirectory == e.imagesDir && d.node.childImageSharp) {
        if (!e.images) {
          e.images = [d.node.childImageSharp.sizes]
        } else {
          e.images.push(d.node.childImageSharp.sizes)
        }
      }
    })
  })
  const listProjects = projectsArr.map(proj => (
    <div className="project">
      <h3>{proj.title}</h3>
      <p>{proj.description}</p>
      {proj.github && (
        <p>
          <a href={proj.github}>{proj.title} github repo</a>
        </p>
      )}
      {proj.images.map(image => (
        <Img
          style={{
            width: '100%',
            marginBottom: '1rem',
            boxShadow: 'black 0px 0px 25px -5px',
          }}
          sizes={image}
        />
      ))}
    </div>
  ))
  return <div>{listProjects}</div>
}

export default ({ data }) => (
  <div className="main-container">
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
