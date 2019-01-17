import React from 'react'
import Img from 'gatsby-image'

const ProjectsList = ({ projects }) => {
  const listProjects = projects.map(project => {
    let { node: proj } = project;
    return (
      <div key={proj.id} className="project">
        {proj.url && (
          <h3>
            <a href={proj.url}>{proj.title}</a>
          </h3>
        )}
        {!proj.url && <h3>{proj.title}</h3>}
        <span>{proj.description.description}</span>
        {proj.githubRepo && (
          <p>
            <a href={proj.githubRepo}>github</a>
          </p>
        )}
        {proj.images.map(image => (
          <Img
            style={{
              width: '100%',
              marginBottom: '1rem',
              boxShadow: 'black 0px 0px 25px -5px',
            }}
            sizes={image.sizes}
          />
        ))}
      </div>
    )})
  return <div>{listProjects}</div>
}

export default ProjectsList
