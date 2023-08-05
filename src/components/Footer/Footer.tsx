import React from 'react'
import "./Footer.css"
import { FaGithub, FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa';


function Footer() {
  return (
    <div className='footer'>
      <div className="footer__container">
        <p className='footer__title'>Asranov Bakhtnur</p>
        <div className="footer__socials">
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
        <p className='footer__copyright'>Created with ❤️ by Asranov Bakhtur</p>
      </div>
    </div>
  )
}

export default Footer