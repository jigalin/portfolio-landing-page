import React from 'react'
import './Section.css'
import { Fade } from 'react-reveal'

const Section = (props) => {
  return (
    <section className={props.title.toLowerCase()}>
      <Fade left duration={1000} distance="70px">
        <h1 className="section-title">{props.title}</h1>
      </Fade>
      <Fade right duration={1000}>
        <div className="underline"></div>
      </Fade>
      {props.children}
    </section>
  )
}

export default Section
