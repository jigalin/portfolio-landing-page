import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({ experience }) => {
  let { link, company, title, dateFrom, dateTo, info, stack } = experience
  return (
    <a
      className="experience-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="experience-card-wrapper">
        <div className="experience-card">
          <div className="experience-card-top">
            <div
              className="experience-bg"
              style={{ background: experience.colourPrimary }}
            ></div>
            <h2>{company}</h2>
            <div className="image-wrapper">
              <div
                className="experience-bg logo-bg"
                style={{
                  background: experience.colourSecondary
                    ? experience.colourSecondary
                    : experience.colourPrimary,
                }}
              ></div>
              <img
                className="company-logo"
                src={require(`../../images/logos/${company
                  .replace(/ /g, '')
                  .toLowerCase()}.png`)}
                alt={`${company}-logo`}
                style={
                  experience.logoheight
                    ? {
                        height: `${experience.logoheight}%`,
                      }
                    : { width: `${experience.logowidth}%` }
                }
              />
            </div>
          </div>
          <div className="experience-card-bottom">
            <div>
              <h2>{title}</h2>
              <h3>
                {dateFrom} - {dateTo}
              </h3>
              <ul>
                {info.map((point, idx) => (
                  <li key={`${company}-point-${idx}`}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="experience-card-tech">
              <ul>
                {stack.map((tech) => (
                  <li key={`${company}-${tech}`}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default ExperienceCard
