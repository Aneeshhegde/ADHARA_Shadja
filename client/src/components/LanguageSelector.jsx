import React, { useState, useRef, useEffect } from 'react';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/LanguageSelector.css';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'kn', label: 'ಕನ್ನಡ', short: 'ಕನ್ನ' },
    { code: 'hi', label: 'हिन्दी', short: 'हिं' }
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-selector-wrapper" ref={dropdownRef}>
      <button 
        type="button" 
        className={`lang-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Language"
        title="Change Language"
      >
        <FaGlobe className="globe-icon" />
        <span className="lang-label">{currentLang.label}</span>
        <FaChevronDown className={`chevron-icon ${isOpen ? 'rotate' : ''}`} />
      </button>

      {isOpen && (
        <ul className="lang-dropdown">
          {languages.map((item) => (
            <li key={item.code}>
              <button
                type="button"
                className={`lang-option ${language === item.code ? 'selected' : ''}`}
                onClick={() => handleSelect(item.code)}
              >
                <span className="option-code">{item.short}</span>
                <span className="option-name">{item.label}</span>
                {language === item.code && <span className="check-mark">✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
