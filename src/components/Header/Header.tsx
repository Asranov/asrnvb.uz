import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./Header.css";
import { GiHamburgerMenu } from 'react-icons/gi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/CV.pdf';
    link.download = `Asranov's CV`;
    link.click();
  };

  return (
    <div className='header'>
      <nav className='nav'>
        <div>
          <a href="/" className='nav__logo' id='home'>
            Asrnvb
          </a>
        </div>
        <div className={`nav__menu ${isOpen ? 'show' : ''}`}>
          <div className="nav__list">
            <div className={`nav__item ${isActive('/')}`}>
              <a href="/" className='nav__link'>
                Home
              </a>
            </div>
            <div className={`nav__item ${isActive('/about')}`}>
              <a href="/about" className='nav__link'>
                About
              </a>
            </div>
            <div className={`nav__item ${isActive('/projects')}`}>
              <a href="/projects" className='nav__link'>
                Projects
              </a>
            </div>
            <div className='nav__item'>
              <button className='download__btn' onClick={handleDownload}>Download CV</button>
            </div>
          </div>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={handleChange}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </div>
  );
}

export default Header;
