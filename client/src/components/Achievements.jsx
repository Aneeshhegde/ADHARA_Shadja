import React from 'react';
import { FaTrophy, FaUsers, FaMusic, FaStar } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Achievements.css';

const Achievements = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: <FaMusic />,
      title: t('achievements.performances'),
      description: t('achievements.performancesDesc')
    },
    {
      icon: <FaTrophy />,
      title: t('achievements.awards'),
      description: t('achievements.awardsDesc')
    },
    {
      icon: <FaUsers />,
      title: t('achievements.studentsTrained'),
      description: t('achievements.studentsTrainedDesc')
    },
    {
      icon: <FaStar />,
      title: t('achievements.experienceYears'),
      description: t('achievements.experienceYearsDesc')
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="achievements-container">
        <h2>{t('achievements.title')}</h2>
        <p className="achievements-subtitle">{t('achievements.subtitle')}</p>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="achievements-highlight">
          <h3>{t('achievements.highlightsTitle')}</h3>
          <ul>
            <li>{t('achievements.h1')}</li>
            <li>{t('achievements.h2')}</li>
            <li>{t('achievements.h3')}</li>
            <li>{t('achievements.h4')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
