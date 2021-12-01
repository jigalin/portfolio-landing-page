import React from 'react'
import './Experience.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import ExperienceCard from '../experienceCard/ExperienceCard'
import experienceData from '../../data/experience.json'

const Experience = () => {
  return (
    <Section title="Experience">
      <div className="experience-content">
        <ul className="experience-list">
          {experienceData.experience.reverse().map((exp) => (
            <li key={`experience-${exp.company}`}>
              <Fade bottom duration={1000} distance="20px">
                <ExperienceCard experience={exp} />
              </Fade>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Experience
