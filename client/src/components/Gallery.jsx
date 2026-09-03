import React from 'react';
import { Link } from 'react-router-dom';
import { FaImages } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Gallery.css';

const Gallery = () => {
  const { t } = useLanguage();

  const previewGallery = [
    {
      id: 1,
      title: t('gallery.documentaryTitle'),
      tag: t('gallery.filterDocumentary'),
      embedUrl: 'https://www.youtube.com/embed/mHtpVwbEn0c'
    },
    {
      id: 2,
      title: t('gallery.studentPerfTitle'),
      tag: t('gallery.filterPerformances'),
      embedUrl: 'https://www.youtube.com/embed/QkQIhstvrMI'
    },
    {
      id: 3,
      title: t('gallery.teachingSessionTitle'),
      tag: t('gallery.filterTeaching'),
      embedUrl: 'https://www.youtube.com/embed/Zpypy4z2fUA'
    },
    {
      id: 4,
      title: t('gallery.guruPerfTitle'),
      tag: t('gallery.filterPerformances'),
      embedUrl: 'https://www.youtube.com/embed/B_NQ91Qc_c4'
    },
    {
      id: 5,
      title: t('gallery.baithakTitle'),
      tag: t('gallery.filterBaithak'),
      src: '/images/frontpage-background.jpeg'
    },
    {
      id: 6,
      title: t('gallery.guruvandanaTitle'),
      tag: t('gallery.filterGuruvandana'),
      src: '/images/vinayak-hegde.jpg'
    }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2>{t('gallery.title')}</h2>
        <p className="gallery-subtitle">{t('gallery.subtitle')}</p>

        <div className="gallery-grid">
          {previewGallery.map((item) => (
            item.embedUrl ? (
              <div key={item.id} className="gallery-item gallery-video-item">
                <iframe
                  src={item.embedUrl}
                  title={item.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <div className="gallery-overlay">
                  <span className="gallery-item-tag">{item.tag}</span>
                  <p>{item.title}</p>
                </div>
              </div>
            ) : (
              <div key={item.id} className="gallery-item gallery-photo-item">
                <img src={item.src} alt={item.title} />
                <div className="gallery-overlay">
                  <span className="gallery-item-tag">{item.tag}</span>
                  <p>{item.title}</p>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Action button to open full gallery and upload page */}
        <div className="gallery-cta-wrapper">
          <Link to="/gallery" className="gallery-open-full-btn">
            <FaImages className="btn-icon" />
            <span>{t('gallery.viewFullBtn')}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
