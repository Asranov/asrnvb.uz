import React from 'react'
import "./About.css"
import photo from "../../assets/images/photo.jpg";

function About() {
  return (
    <div className='about'>
      <div className="about__container">
        <div className='about__content'>
          <p>
            Hi there, I'm <b>Asranov Bakhtnur</b>, a <b>Software Engineer</b> since 2022,
            I transform ideas into functional software using code.
            My goal is to create elegant solutions that not only meet technical needs but also bring delight to users.
          </p>
        </div>
        <div className="about__image">
          <img src={photo} alt="avatar" />
        </div>
      </div>
    </div>
  )
}

export default About