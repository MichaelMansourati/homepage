import React from 'react'
import Link from 'gatsby-link'
import projects from '../assets/webProjectsList.js'

import Navbar from '../components/navbar.js'

import '../styles/webdev.css'



const ProjectsList = props  => {
  const projectsArr = props.projectsArr
  console.log(props)
  const listProjects = projectsArr.map(proj => (
    <div className="project">
      <h3>{proj.title}</h3>
      <p>{proj.description}</p>
      {proj.github && (
        <p>
          <a href={proj.github}>{proj.title} github repo</a>
        </p>
      )}
      {proj.images.map(image => <img className="webdevImg" src={image} />)}
    </div>
  ))
  return <div>{listProjects}</div>
}

export default ({ data }) => (
  <div className="main-container">
    <Navbar />
    <br />
    <ProjectsList projectsArr={ projects } data={ data.allFile.edges } />
  </div>
)

export const query = graphql`
  query screenshots {
    allFile(filter: {
      sourceInstanceName: {
        regex: "/siteScreenshots/"
      }
    }) {
      edges {
        node {
          relativeDirectory
          childImageSharp {
            id
          }
        }
      }
    }
  }
`