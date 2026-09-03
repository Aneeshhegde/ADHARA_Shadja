import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Certifications.css';

const Certifications = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      title: t('certifications.c1_title'),
      description: t('certifications.c1_desc')
    },
    {
      title: t('certifications.c2_title'),
      description: t('certifications.c2_desc')
    },
    {
      title: t('certifications.c3_title'),
      description: t('certifications.c3_desc')
    },
    {
      title: t('certifications.c4_title'),
      description: t('certifications.c4_desc')
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <h2>{t('certifications.title')}</h2>
        <p className="certifications-subtitle">{t('certifications.subtitle')}</p>

        <p className="certifications-intro">
          {t('certifications.intro')}
        </p>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-number">{index + 1}</div>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="certification-benefits">
          <h3>{t('certifications.benefitsTitle')}</h3>
          <ul>
            <li>{t('certifications.b1')}</li>
            <li>{t('certifications.b2')}</li>
            <li>{t('certifications.b3')}</li>
            <li>{t('certifications.b4')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
