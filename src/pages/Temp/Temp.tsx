import React from 'react'
import { FaGithub, FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa';
import "./Temp.css"
import avatar from "../../assets/images/avatar.jpg"

function Temp() {
  return (
    <div className='temp'>
      <div className="temp__container">
        <img src={avatar} alt="avatar" />
        <h1 className="temp__title">Asranov Bakhtnur</h1>
        <p className='temp__soon'>My website is opening soon...</p>
        <div className="temp__socials">
          <a href="https://github.com/Asranov" target={"_blank"}>
            <FaGithub className='social__icon' />
          </a>
          <a href="https://www.linkedin.com/in/baxtnur-asranov-170314243/" target={"_blank"}>
            <FaLinkedin className='social__icon' />
          </a>
          <a href="https://t.me/asrnvb" target={"_blank"}>
            <FaTelegram className='social__icon' />
          </a>
          <a href="https://www.instagram.com/axi.asranov" target={"_blank"}>
            <FaInstagram className='social__icon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Temp