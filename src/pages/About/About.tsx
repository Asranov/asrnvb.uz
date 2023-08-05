import React from 'react'
import "./About.css"
// import profilePhoto from "../../assets/images/profile_photo2.JPG"

function About() {
  return (
    <div className='about' id='about'>
      <div className="about__container">
        <div>
          <img src="https://static.vecteezy.com/system/resources/previews/002/227/847/original/programmer-computer-expert-black-linear-icon-vector.jpg" alt="404" />
        </div>
        <div className='about__container-title'>
          <h2 className='about__title'>I'm Asranov Bakhtnur</h2>
          <p className='about__text'>I've been involved in software development since 2022. During this time, I've worked with experienced professionals in the field. My focus has been on creating various software projects, from small tools to larger applications.
            I really enjoy the process of coding and problem-solving. Whether it's developing new features, improving existing ones, or making user interfaces more intuitive, I find software development to be both creative and satisfying.</p>
        </div>
      </div>
    </div>
  )
}

export default About