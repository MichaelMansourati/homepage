import React from 'react'
import Link from 'gatsby-link'
import projects from '../assets/webProjectsList.js'
import Img from 'gatsby-image'

import Navbar from '../components/navbar.js'

import '../styles/webdev.css'



const ProjectsList = props  => {
  const projectsArr = props.projectsArr
  console.log(props.data)
  projectsArr.forEach(e => {
    props.data.forEach(d => {
      console.log(d.node.relativeDirectory, e.imagesDir)
      if (d.node.relativeDirectory == e.imagesDir && d.node.childImageSharp) {
        if (!e.images) {
          console.log(d.node);
          e.images = [d.node.childImageSharp.sizes];
        } else {
          e.images.push(d.node.childImageSharp.sizes);
        }
      }
    })
  })
  console.log(projectsArr);
  const listProjects = projectsArr.map(proj => (
    <div className="project">
      <h3>{proj.title}</h3>
      <p>{proj.description}</p>
      {proj.github && (
        <p>
          <a href={proj.github}>{proj.title} github repo</a>
        </p>
      )}
      {proj.images.map(image => <Img sizes={image}/> )}
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
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    }
  }
`