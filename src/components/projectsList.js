import React from 'react'
import Img from 'gatsby-image'

const ProjectsList = props => {
  props.projectsArr.forEach(e => {
    props.data.forEach(d => {
      if (d.node.relativeDirectory === e.imagesDir && d.node.childImageSharp) {
        e.images.push(d.node.childImageSharp.sizes)
      }
    })
  })
  const listProjects = props.projectsArr.map(proj => (
    <div className="project">
      {proj.url && (
        <h3>
          <a href={proj.url}>{proj.title}</a>
        </h3>
      )}
      {!proj.url && <h3>{proj.title}</h3>}
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

export default ProjectsList
