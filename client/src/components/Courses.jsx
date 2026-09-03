import React from 'react';
import { 
  FaTrophy, 
  FaHandHoldingUsd, 
  FaGraduationCap, 
  FaPrayingHands, 
  FaFeatherAlt, 
  FaMusic 
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Courses.css';

const Courses = () => {
  const { t } = useLanguage();

  const categories = [
    {
      id: 'junior',
      title: t('courses.juniorTitle'),
      level: t('courses.juniorLevel'),
      badge: 'Junior'
    },
    {
      id: 'senior',
      title: t('courses.seniorTitle'),
      level: t('courses.seniorLevel'),
      badge: 'Senior'
    },
    {
      id: 'vidwath',
      title: t('courses.vidwathTitle'),
      level: t('courses.vidwathLevel'),
      badge: 'Vidwath'
    }
  ];

  const specialGenres = [
    {
      id: 'devotional',
      icon: <FaPrayingHands className="genre-icon" />,
      title: t('courses.genreDevotional'),
      desc: t('courses.genreDevotionalDesc')
    },
    {
      id: 'ghazals',
      icon: <FaFeatherAlt className="genre-icon" />,
      title: t('courses.genreGhazals'),
      desc: t('courses.genreGhazalsDesc')
    },
    {
      id: 'thumri',
      icon: <FaMusic className="genre-icon" />,
      title: t('courses.genreThumri'),
      desc: t('courses.genreThumriDesc')
    }
  ];

  const facilities = [
    {
      id: 'exam-prep',
      icon: <FaTrophy className="facility-card-icon" />,
      title: t('facilities.examPrepTitle'),
      desc: t('facilities.examPrepDesc')
    },
    {
      id: 'scholarship',
      icon: <FaHandHoldingUsd className="facility-card-icon" />,
      title: t('facilities.scholarshipTitle'),
      desc: t('facilities.scholarshipDesc')
    }
  ];

  return (
    <section id="online-classes" className="courses-section">
      <div className="courses-container">
        
        {/* Categories Section */}
        <div className="categories-header-wrap">
          <h2>{t('courses.title')}</h2>
          <p className="courses-subtitle">{t('courses.subtitle')}</p>
        </div>

        <div className="categories-grid-clean">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card-clean">
              <div className="cat-card-header">
                <span className="cat-badge">
                  <FaGraduationCap /> {cat.badge}
                </span>
                <h3>{cat.title}</h3>
                <span className="cat-level-text">{cat.level}</span>
              </div>
              <div className="cat-action">
                <a href="#registration" className="cat-enroll-btn">
                  {t('courses.enrollBtn')}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Special Repertoire: Devotional, Ghazals & Thumri */}
        <div className="special-genres-wrap">
          <div className="genres-header">
            <h3>{t('courses.specialGenresTitle')}</h3>
            <p>{t('courses.specialGenresSubtitle')}</p>
          </div>

          <div className="genres-grid">
            {specialGenres.map((genre) => (
              <div key={genre.id} className="genre-card">
                <div className="genre-icon-box">
                  {genre.icon}
                </div>
                <div className="genre-content">
                  <h4>{genre.title}</h4>
                  <p>{genre.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities For Students Section (Matching the 2nd image) */}
        <div className="facilities-section-wrap">
          <div className="facilities-header">
            <h2 className="facilities-title">{t('facilities.title')}</h2>
            <div className="facilities-title-underline"></div>
          </div>

          <div className="facilities-grid">
            {facilities.map((fac) => (
              <div key={fac.id} className="facility-box-card">
                <div className="facility-icon-wrap">
                  {fac.icon}
                </div>
                <div className="facility-content">
                  <h4 className="facility-title">{fac.title}</h4>
                  <p className="facility-desc">{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Courses;
