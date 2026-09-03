import React from 'react';
import { FaMusic, FaMicrophone, FaGraduationCap } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>{t('about.title')}</h2>
        <p className="about-subtitle">{t('about.subtitle')}</p>

        <div className="about-content">
          <div className="about-text">
            <p>{t('about.p1')}</p>
            
            <p>{t('about.p2')}</p>

            <h3>{t('about.missionTitle')}</h3>
            <p>{t('about.missionText')}</p>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <FaMicrophone className="feature-icon" />
              <h3>{t('about.expertTraining')}</h3>
              <p>{t('about.expertTrainingDesc')}</p>
            </div>
            <div className="feature-card">
              <FaGraduationCap className="feature-icon" />
              <h3>{t('about.curriculum')}</h3>
              <p>{t('about.curriculumDesc')}</p>
            </div>
            <div className="feature-card">
              <FaMusic className="feature-icon" />
              <h3>{t('about.flexibility')}</h3>
              <p>{t('about.flexibilityDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
