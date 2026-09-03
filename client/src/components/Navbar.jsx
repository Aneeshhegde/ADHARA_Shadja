import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/images/logo.jpg" alt="ADHARA SHADJA Logo" className="logo-image" />
          <span className="logo-text">ADHARA SHADJA</span>
        </div>

        {/* Language selector for desktop + mobile right */}
        <div className="navbar-actions">
          <LanguageSelector />
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <ScrollLink
              to="online-classes"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="nav-link nav-btn"
            >
              {t('nav.onlineClasses')}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="nav-link"
            >
              {t('nav.about')}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="guru"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="nav-link"
            >
              {t('nav.guru')}
            </ScrollLink>
          </li>
          <li>
            <RouterLink
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className="nav-link"
            >
              {t('nav.gallery')}
            </RouterLink>
          </li>
          <li>
            <ScrollLink
              to="achievements"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="nav-link"
            >
              {t('nav.achievements')}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="certifications"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="nav-link"
            >
              {t('nav.certifications')}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="community"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="nav-link"
            >
              {t('nav.community')}
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="nav-link"
            >
              {t('nav.contact')}
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
