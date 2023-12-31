import React, { useState, useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import "./Header.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

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

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as HTMLDivElement).contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);


  return (
    <div className='header'>
      <nav className='nav'>
        <div>
          <Link to="/" className='nav__logo' id='home'>
            Asrnvb
          </Link>
        </div>
        <div ref={menuRef} className={`nav__menu ${isOpen ? 'show' : ''}`}>
          <div className="nav__list">
            <div className={`nav__item ${isActive('/')}`}>
              <Link to="/" className='nav__link'>
                Home
              </Link>
            </div>
            <div className={`nav__item ${isActive('/about')}`}>
              <Link to="/about" className='nav__link'>
                About
              </Link>
            </div>
            <div className={`nav__item ${isActive('/projects')}`}>
              <Link to="/projects" className='nav__link'>
                Projects
              </Link>
            </div>
            <div className='nav__item'>
              <button className='download__btn' onClick={handleDownload}>Download CV</button>
            </div>
          </div>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={handleChange}>
          {isOpen ? (
            <AiOutlineClose />
          ) : (
            <GiHamburgerMenu />
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
