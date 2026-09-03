import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Guru.css';

const Guru = () => {
  const { t } = useLanguage();

  return (
    <section id="guru" className="guru">
      <div className="guru-container">
        <h2>{t('guru.title')}</h2>
        <p className="guru-subtitle">{t('guru.subtitle')}</p>

        <div className="guru-content">
          <div className="guru-image">
            <img 
              src="/images/vinayak-hegde.jpg" 
              alt={t('guru.name')}
              loading="lazy"
            />
          </div>

          <div className="guru-info">
            <h3>{t('guru.name')}</h3>
            <p className="guru-title">{t('guru.role')}</p>

            <div className="guru-details">
              <div className="detail-item">
                <h4>{t('guru.experience')}</h4>
                <p>{t('guru.experienceDesc')}</p>
              </div>

              <div className="detail-item">
                <h4>{t('guru.background')}</h4>
                <p>{t('guru.backgroundDesc')}</p>
              </div>

              <div className="detail-item">
                <h4>{t('guru.expertise')}</h4>
                <p>{t('guru.expertiseDesc')}</p>
              </div>
            </div>

            <div className="guru-bio">
              <h4>{t('guru.aboutGuruTitle')}</h4>
              <p>{t('guru.aboutGuruText')}</p>
            </div>

            <div className="guru-philosophy">
              <h4>{t('guru.philosophyTitle')}</h4>
              <p>{t('guru.philosophyText')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guru;
