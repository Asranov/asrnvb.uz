import React, { useState } from 'react'
import "./Header.css"
import { GiHamburgerMenu } from 'react-icons/gi';


function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='header'>
      <nav className='nav nav-grid'>
        <div>
          <a href="#" className='nav__logo' id='home'>Asrnvb</a>
        </div>
        <div className={`nav__menu ${isOpen ? 'show' : ''}`}>
          <div className="nav__list">
            <div className="nav__item">
              <a href="#home" className='nav__link active'>Home</a>
            </div>
            <div className="nav__item">
              <a href="#about" className='nav__link'>About</a>
            </div>
            <div className="nav__item">
              <a href="#socials" className='nav__link'>Socials</a>
            </div>
            <div className="nav__item">
              <a href="#contact" className='nav__link'>Contact</a>
            </div>
          </div>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={handleChange}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </div>
  )
}

export default Header