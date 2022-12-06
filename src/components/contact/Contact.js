import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import ContactForm from '../contactForm/ContactForm'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
import facebook from '../../images/social/facebook.png'
import discord from '../../images/social/discord.png'

const Contact = () => {
  return (
    <Section title="Contact">
      <ContactForm />
      <Bounce cascade>
        <div className="links">
          <a
            href="https://github.com/NimmaDileep"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>
          <a
            href="https://www.linkedin.com/in/nimma-dileep-reddy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>
          <a
            href="https://discord.com/users/AssassinWolf#2491"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={discord} alt="Facebook Logo" width="40px" />
          </a>
          <a
            href="https://www.facebook.com/dileep.reddy.351"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook Logo" width="40px" />
          </a>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact