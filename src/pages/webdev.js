import React from 'react'
import Link from 'gatsby-link'
import projects from '../assets/webProjectsList.js'

import Navbar from '../components/navbar.js'

import '../styles/webdev.css'

const projectsArr = projects.projects

const ProjectsList = (props) => {
  const projectsArr = props.projectsArr
  const listProjects = projectsArr.map((proj) =>
    <div className="project">
    <h3>{proj.title}</h3>
    <p>
      {proj.description}
    </p>
    {
      proj.github &&
      <p><a href={proj.github}>github repo</a></p>
    }
    {
      proj.images.map((image) =>
        <img className="webdevImg" src={image} />
      )
    }
    </div>
  );
  return <div>{listProjects}</div>
}

export default ({ data }) => (
  <div className="mainContainer">
    <Navbar />
    <br />
    <ProjectsList projectsArr={projectsArr} />
  </div>
)
