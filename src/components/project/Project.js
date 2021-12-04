import React from 'react'
import './Project.css'

const Project = ({ project, type }) => {
  if (type === 'github') {
    return (
      <a
        className="project-link"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="project-card-wrapper">
          <div className="project-card">
            <div className="project-name">
              <svg
                aria-hidden="true"
                className="octicon"
                height="20"
                role="img"
                viewBox="0 0 12 16"
                width="14"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                ></path>
              </svg>
              <h2 className="project-title">{project.name}</h2>
            </div>
            {/* <div style={{ display: 'flex' }}>
              <div> */}
            <p className="project-description">{project.description}</p>
            {/* </div>
              <div>
                <p>Will add arrow icon here</p>
              </div>
            </div> */}
            <div className="project-info">
              <div className="project-info-left">
                {project.languages.nodes.map((language) => (
                  <div
                    key={`${project.name}-${language.name}`}
                    className="language"
                  >
                    <div
                      className="language-colour"
                      style={{ backgroundColor: `${language.color}` }}
                    ></div>
                    <p className="language-name">{language.name}</p>
                  </div>
                ))}
              </div>
              <div className="project-info-right">
                <p className="project-size">{project.diskUsage}KB</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    )
  }
}

export default Project
