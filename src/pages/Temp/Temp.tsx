import React from 'react'
import { FaGithub, FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa';
import "./Temp.css"
import avatar from "../../assets/images/avatar.jpg"

const Temp = () => {
  return (
    <div className='temp'>
      <a href="https://asrnvb.uz/" className='logo-text'>Asrnvb</a>
      <div className="temp__container">
        <img src={avatar} alt="avatar" />
        <h1 className="temp__title">Asranov Bakhtnur</h1>
        <p className='temp__soon'>Prepararing for the big reveal <br /> of website soon...</p>
        <div className="temp__socials">
          <a href="https://github.com/Asranov" target={"_blank"} rel="noreferrer">
            <FaGithub className='social__icon' />
          </a>
          <a href="https://www.linkedin.com/in/baxtnur-asranov-170314243/" target={"_blank"} rel="noreferrer">
            <FaLinkedin className='social__icon' />
          </a>
          <a href="https://t.me/asrnvb" target={"_blank"} rel="noreferrer">
            <FaTelegram className='social__icon' />
          </a>
          <a href="https://www.instagram.com/asranov.insights" target={"_blank"} rel="noreferrer">
            <FaInstagram className='social__icon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Temp