import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <img src="/images/frontpage-background.jpeg" alt="ADHARA SHADJA Gurukula campus" />
      </div>
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        
        <div className="hero-buttons">
          <ScrollLink
            to="registration"
            smooth={true}
            duration={500}
            className="btn btn-primary"
          >
            {t('hero.registerBtn')}
          </ScrollLink>
          <ScrollLink
            to="gallery"
            smooth={true}
            duration={500}
            className="btn btn-secondary"
          >
            {t('hero.watchBtn')}
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
