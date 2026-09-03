import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaPlus, 
  FaYoutube, 
  FaImage, 
  FaCalendarAlt, 
  FaTimes, 
  FaTrash, 
  FaPlay, 
  FaMusic, 
  FaLock, 
  FaShieldAlt, 
  FaUnlock, 
  FaKey 
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';
import '../styles/GalleryPage.css';

const DEFAULT_GALLERY_ITEMS = [
  {
    id: 'doc-1',
    type: 'video',
    category: 'documentary',
    titleKey: 'gallery.documentaryTitle',
    descKey: 'gallery.documentaryDesc',
    titleFallback: 'Documentary of ADHARA Shadja Gurukula',
    descFallback: 'Journey, traditions, and musical heritage of our Gurukula in Hirehadda',
    embedUrl: 'https://www.youtube.com/embed/mHtpVwbEn0c',
    youtubeId: 'mHtpVwbEn0c',
    date: '2024'
  },
  {
    id: 'perf-student',
    type: 'video',
    category: 'performances',
    titleKey: 'gallery.studentPerfTitle',
    descKey: 'gallery.studentPerfDesc',
    titleFallback: 'Classical Performance by Student',
    descFallback: 'Student displaying raga performance and vocal mastery',
    embedUrl: 'https://www.youtube.com/embed/QkQIhstvrMI',
    youtubeId: 'QkQIhstvrMI',
    date: '2024'
  },
  {
    id: 'teach-1',
    type: 'video',
    category: 'teaching',
    titleKey: 'gallery.teachingSessionTitle',
    descKey: 'gallery.teachingSessionDesc',
    titleFallback: 'Gurukula Music Teaching Session',
    descFallback: 'Interactive Guru-Shishya training in traditional classroom',
    embedUrl: 'https://www.youtube.com/embed/Zpypy4z2fUA',
    youtubeId: 'Zpypy4z2fUA',
    date: '2024'
  },
  {
    id: 'perf-guru',
    type: 'video',
    category: 'performances',
    titleKey: 'gallery.guruPerfTitle',
    descKey: 'gallery.guruPerfDesc',
    titleFallback: 'Classical Performance by Shri Vinayak Hegde',
    descFallback: 'Guru rendering soulful Hindustani classical ragas',
    embedUrl: 'https://www.youtube.com/embed/B_NQ91Qc_c4',
    youtubeId: 'B_NQ91Qc_c4',
    date: '2023'
  },
  {
    id: 'perf-concert',
    type: 'video',
    category: 'performances',
    titleKey: 'gallery.studentConcertTitle',
    descKey: 'gallery.exploreHeading',
    titleFallback: 'Classical Performance 1',
    descFallback: 'Stage performance by Gurukula musicians',
    embedUrl: 'https://www.youtube.com/embed/_dVfae9lohg',
    youtubeId: '_dVfae9lohg',
    date: '2023'
  },
  {
    id: 'event-baithak',
    type: 'photo',
    category: 'baithak',
    titleKey: 'gallery.baithakTitle',
    descKey: 'gallery.baithakDesc',
    titleFallback: 'Monthly Baithak - Sangeetha Sammelana',
    descFallback: 'Monthly intimate classical gathering and riyaz session at Gurukula',
    src: '/images/frontpage-background.jpeg',
    date: 'Monthly'
  },
  {
    id: 'event-guruvandana',
    type: 'photo',
    category: 'guruvandana',
    titleKey: 'gallery.guruvandanaTitle',
    descKey: 'gallery.guruvandanaDesc',
    titleFallback: 'Guruvandana Utsava & Felicitation Program',
    descFallback: 'Homage and grand celebrations honoring the sacred Guru tradition',
    src: '/images/vinayak-hegde.jpg',
    date: 'Recent Celebration'
  }
];

const MASTER_PASSCODE = 'adhara@2024';

const GalleryPage = () => {
  const { t } = useLanguage();
  const [galleryItems, setGalleryItems] = useState([]);
  const [lightboxItem, setLightboxItem] = useState(null);

  // Authorization State
  const [isAdmin, setIsAdmin] = useState(() => {
    return sessionStorage.getItem('adhara_admin_auth') === 'true';
  });
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [inputPasscode, setInputPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  // Upload Modal State
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadType, setUploadType] = useState('photo'); // 'photo' or 'video'
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState('baithak');
  const [formDesc, setFormDesc] = useState('');
  const [formYoutubeUrl, setFormYoutubeUrl] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [uploadError, setUploadError] = useState('');

  // Load custom items from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('adhara_custom_gallery');
      if (saved) {
        const customItems = JSON.parse(saved);
        setGalleryItems([...customItems, ...DEFAULT_GALLERY_ITEMS]);
      } else {
        setGalleryItems(DEFAULT_GALLERY_ITEMS);
      }
    } catch (e) {
      setGalleryItems(DEFAULT_GALLERY_ITEMS);
    }
  }, []);

  const handleOpenUpload = () => {
    if (!isAdmin) {
      setAuthError('');
      setInputPasscode('');
      setShowAuthModal(true);
    } else {
      setShowUploadModal(true);
    }
  };

  const handleVerifyPasscode = (e) => {
    e.preventDefault();
    setAuthError('');

    const savedCustomPass = localStorage.getItem('adhara_admin_passcode') || MASTER_PASSCODE;

    if (inputPasscode === savedCustomPass || inputPasscode === MASTER_PASSCODE) {
      setIsAdmin(true);
      sessionStorage.setItem('adhara_admin_auth', 'true');
      setShowAuthModal(false);
      setInputPasscode('');
      setShowUploadModal(true); // Proceed to upload immediately
    } else {
      setAuthError(t('gallery.invalidPasscode'));
    }
  };

  const handleLogoutAdmin = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('adhara_admin_auth');
  };

  const saveCustomItem = (newItem) => {
    try {
      const saved = localStorage.getItem('adhara_custom_gallery');
      const customItems = saved ? JSON.parse(saved) : [];
      const updated = [newItem, ...customItems];
      localStorage.setItem('adhara_custom_gallery', JSON.stringify(updated));
      setGalleryItems([newItem, ...galleryItems]);
    } catch (e) {
      console.error('Error saving gallery item:', e);
    }
  };

  const deleteCustomItem = (id, e) => {
    e.stopPropagation();
    if (!isAdmin) {
      alert('Only authorized administrators can delete media.');
      return;
    }

    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        const saved = localStorage.getItem('adhara_custom_gallery');
        if (saved) {
          const customItems = JSON.parse(saved);
          const filtered = customItems.filter(item => item.id !== id);
          localStorage.setItem('adhara_custom_gallery', JSON.stringify(filtered));
        }
        setGalleryItems(galleryItems.filter(item => item.id !== id));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const extractYoutubeEmbed = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : url;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setUploadError('Image size should be less than 5MB');
        return;
      }
      setUploadError('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    setUploadError('');

    if (!isAdmin) {
      setUploadError('Authorization required to upload media.');
      return;
    }

    if (!formTitle.trim()) {
      setUploadError('Please enter a title');
      return;
    }

    if (uploadType === 'video') {
      if (!formYoutubeUrl.trim()) {
        setUploadError('Please provide a YouTube video URL');
        return;
      }
      const embedUrl = extractYoutubeEmbed(formYoutubeUrl);
      const newItem = {
        id: 'user-' + Date.now(),
        type: 'video',
        category: formCategory,
        titleFallback: formTitle,
        descFallback: formDesc || 'Authorized Gurukula Video',
        embedUrl: embedUrl,
        date: new Date().toLocaleDateString(),
        isUserUploaded: true
      };
      saveCustomItem(newItem);
    } else {
      if (!previewImage) {
        setUploadError('Please select an image to upload');
        return;
      }
      const newItem = {
        id: 'user-' + Date.now(),
        type: 'photo',
        category: formCategory,
        titleFallback: formTitle,
        descFallback: formDesc || 'Authorized Gurukula Photo',
        src: previewImage,
        date: new Date().toLocaleDateString(),
        isUserUploaded: true
      };
      saveCustomItem(newItem);
    }

    // Reset Form
    setFormTitle('');
    setFormDesc('');
    setFormYoutubeUrl('');
    setPreviewImage('');
    setShowUploadModal(false);
  };

  const getItemTitle = (item) => {
    if (item.titleKey) {
      const translated = t(item.titleKey);
      if (translated && translated !== item.titleKey) return translated;
    }
    return item.titleFallback || 'Gurukula Moment';
  };

  const getItemDesc = (item) => {
    if (item.descKey) {
      const translated = t(item.descKey);
      if (translated && translated !== item.descKey) return translated;
    }
    return item.descFallback || '';
  };

  const getCategoryBadgeLabel = (cat) => {
    switch (cat) {
      case 'documentary': return t('gallery.filterDocumentary');
      case 'performances': return t('gallery.filterPerformances');
      case 'teaching': return t('gallery.filterTeaching');
      case 'baithak': return t('gallery.filterBaithak');
      case 'guruvandana': return t('gallery.filterGuruvandana');
      default: return cat;
    }
  };

  return (
    <div className="gallery-page">
      {/* Header */}
      <header className="gallery-page-header">
        <div className="gallery-header-container">
          <Link to="/" className="back-home-btn">
            <FaArrowLeft /> {t('gallery.backToHome')}
          </Link>
          
          <div className="gallery-brand">
            <img src="/images/logo.jpg" alt="ADHARA SHADJA Logo" className="gallery-brand-logo" />
            <div className="brand-text-wrap">
              <h1>{t('gallery.title')}</h1>
              <span className="brand-sub">ADHARA SHADJA Gurukula</span>
            </div>
          </div>

          <div className="header-actions">
            {isAdmin ? (
              <div className="admin-status-badge">
                <span className="badge-pill">
                  <FaShieldAlt className="shield-icon" /> {t('gallery.adminLoggedInBadge')}
                </span>
                <button 
                  className="admin-logout-btn" 
                  onClick={handleLogoutAdmin}
                  title="Logout Admin"
                >
                  <FaUnlock /> {t('gallery.logoutBtn')}
                </button>
              </div>
            ) : null}

            <LanguageSelector />

            <button 
              className={`open-upload-btn ${isAdmin ? 'admin-ready' : 'auth-locked'}`}
              onClick={handleOpenUpload}
              title={isAdmin ? "Upload Media" : "Authorized Admin Login Required"}
            >
              {isAdmin ? <FaPlus /> : <FaLock />} {t('gallery.uploadBtn')}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner in Gallery */}
      <section className="gallery-banner">
        <div className="gallery-banner-content">
          <h2>{t('gallery.title')}</h2>
          <p>{t('gallery.subtitle')}</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <main className="gallery-main-container">
        {galleryItems.length === 0 ? (
          <div className="no-items-card">
            <FaMusic className="no-items-icon" />
            <p>{t('gallery.noItems')}</p>
            <button 
              className="btn btn-primary"
              onClick={handleOpenUpload}
            >
              <FaPlus /> {t('gallery.uploadBtn')}
            </button>
          </div>
        ) : (
          <div className="gallery-cards-grid">
            {galleryItems.map((item) => {
              const itemTitle = getItemTitle(item);
              const itemDesc = getItemDesc(item);

              return (
                <div 
                  key={item.id} 
                  className={`gallery-card ${item.type === 'video' ? 'video-card' : 'photo-card'}`}
                  onClick={() => setLightboxItem(item)}
                >
                  <div className="card-media-wrapper">
                    {item.type === 'video' ? (
                      <div className="video-thumb-container">
                        <iframe
                          src={item.embedUrl}
                          title={itemTitle}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="photo-thumb-container">
                        <img src={item.src} alt={itemTitle} loading="lazy" />
                        <div className="photo-hover-overlay">
                          <span className="view-badge"><FaPlay /> View Photo</span>
                        </div>
                      </div>
                    )}

                    <span className={`category-tag ${item.category}`}>
                      {getCategoryBadgeLabel(item.category)}
                    </span>

                    {item.isUserUploaded && isAdmin && (
                      <button 
                        className="delete-item-btn"
                        title="Delete this upload (Admin)"
                        onClick={(e) => deleteCustomItem(item.id, e)}
                      >
                        <FaTrash />
                      </button>
                    )}
                  </div>

                  <div className="card-info-content">
                    <div className="card-meta">
                      <span className="meta-type">
                        {item.type === 'video' ? <><FaYoutube className="meta-icon red" /> Video</> : <><FaImage className="meta-icon gold" /> Photo</>}
                      </span>
                      {item.date && (
                        <span className="meta-date">
                          <FaCalendarAlt /> {item.date}
                        </span>
                      )}
                    </div>
                    <h3>{itemTitle}</h3>
                    {itemDesc && <p>{itemDesc}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Admin Passcode Authentication Modal */}
      {showAuthModal && (
        <div className="modal-backdrop" onClick={() => setShowAuthModal(false)}>
          <div className="upload-modal-box auth-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header auth-modal-header">
              <div className="auth-header-title">
                <FaLock className="auth-lock-icon" />
                <h3>{t('gallery.authRequiredTitle')}</h3>
              </div>
              <button 
                className="close-modal-btn"
                onClick={() => setShowAuthModal(false)}
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleVerifyPasscode} className="upload-form">
              <p className="auth-notice-text">
                {t('gallery.authRequiredDesc')}
              </p>

              {authError && <div className="form-error-alert">{authError}</div>}

              <div className="form-group">
                <label>{t('gallery.enterPasscode')}</label>
                <div className="passcode-input-wrap">
                  <FaKey className="pass-key-icon" />
                  <input
                    type="password"
                    placeholder={t('gallery.passcodePlaceholder')}
                    value={inputPasscode}
                    onChange={(e) => setInputPasscode(e.target.value)}
                    autoFocus
                    required
                    className="modal-input passcode-input"
                  />
                </div>
                <small className="passcode-hint-text">
                  🔒 {t('gallery.adminPasscodeHint')}
                </small>
              </div>

              <div className="modal-actions">
                <button 
                  type="button" 
                  className="btn-cancel"
                  onClick={() => setShowAuthModal(false)}
                >
                  {t('gallery.cancel')}
                </button>
                <button type="submit" className="btn-submit-upload">
                  <FaShieldAlt /> {t('gallery.verifyLoginBtn')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Upload Modal (Only accessible once authorized) */}
      {showUploadModal && isAdmin && (
        <div className="modal-backdrop" onClick={() => setShowUploadModal(false)}>
          <div className="upload-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="auth-header-title">
                <FaShieldAlt className="auth-shield-gold" />
                <h3>{t('gallery.uploadModalTitle')}</h3>
              </div>
              <button 
                className="close-modal-btn"
                onClick={() => setShowUploadModal(false)}
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleUploadSubmit} className="upload-form">
              {uploadError && <div className="form-error-alert">{uploadError}</div>}

              {/* Type Switcher */}
              <div className="form-group type-selector-group">
                <label>{t('gallery.mediaType')}</label>
                <div className="type-toggle-pills">
                  <button
                    type="button"
                    className={`toggle-pill ${uploadType === 'photo' ? 'active' : ''}`}
                    onClick={() => setUploadType('photo')}
                  >
                    <FaImage /> {t('gallery.typePhoto')}
                  </button>
                  <button
                    type="button"
                    className={`toggle-pill ${uploadType === 'video' ? 'active' : ''}`}
                    onClick={() => setUploadType('video')}
                  >
                    <FaYoutube /> {t('gallery.typeVideo')}
                  </button>
                </div>
              </div>

              {/* Category */}
              <div className="form-group">
                <label>{t('gallery.mediaCategory')}</label>
                <select 
                  value={formCategory} 
                  onChange={(e) => setFormCategory(e.target.value)}
                  className="modal-select"
                >
                  <option value="baithak">🪕 {t('gallery.filterBaithak')}</option>
                  <option value="guruvandana">🙏 {t('gallery.filterGuruvandana')}</option>
                  <option value="performances">🎤 {t('gallery.filterPerformances')}</option>
                  <option value="teaching">🎼 {t('gallery.filterTeaching')}</option>
                  <option value="documentary">🎬 {t('gallery.filterDocumentary')}</option>
                </select>
              </div>

              {/* Title */}
              <div className="form-group">
                <label>{t('gallery.mediaTitle')}</label>
                <input
                  type="text"
                  placeholder="e.g. Monthly Baithak November 2024 / Student Concert"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  required
                  className="modal-input"
                />
              </div>

              {/* Media Input based on Type */}
              {uploadType === 'video' ? (
                <div className="form-group">
                  <label>{t('gallery.mediaYoutubeUrl')}</label>
                  <input
                    type="url"
                    placeholder="https://youtu.be/... or https://www.youtube.com/watch?v=..."
                    value={formYoutubeUrl}
                    onChange={(e) => setFormYoutubeUrl(e.target.value)}
                    required
                    className="modal-input"
                  />
                </div>
              ) : (
                <div className="form-group">
                  <label>{t('gallery.mediaFile')}</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="modal-file-input"
                  />
                  {previewImage && (
                    <div className="image-preview-wrapper">
                      <img src={previewImage} alt="Upload preview" />
                    </div>
                  )}
                </div>
              )}

              {/* Description */}
              <div className="form-group">
                <label>{t('gallery.mediaDescription')}</label>
                <textarea
                  placeholder="Brief details about the program, ragas performed, or participants..."
                  value={formDesc}
                  onChange={(e) => setFormDesc(e.target.value)}
                  rows="3"
                  className="modal-textarea"
                />
              </div>

              <div className="modal-actions">
                <button 
                  type="button" 
                  className="btn-cancel"
                  onClick={() => setShowUploadModal(false)}
                >
                  {t('gallery.cancel')}
                </button>
                <button type="submit" className="btn-submit-upload">
                  <FaPlus /> {t('gallery.submitUpload')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lightbox / Fullscreen Modal */}
      {lightboxItem && (
        <div className="lightbox-backdrop" onClick={() => setLightboxItem(null)}>
          <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxItem(null)}>
              <FaTimes />
            </button>
            <div className="lightbox-media">
              {lightboxItem.type === 'video' ? (
                <iframe
                  src={lightboxItem.embedUrl}
                  title={getItemTitle(lightboxItem)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img src={lightboxItem.src} alt={getItemTitle(lightboxItem)} />
              )}
            </div>
            <div className="lightbox-info">
              <span className={`category-tag ${lightboxItem.category}`}>
                {getCategoryBadgeLabel(lightboxItem.category)}
              </span>
              <h3>{getItemTitle(lightboxItem)}</h3>
              <p>{getItemDesc(lightboxItem)}</p>
              {lightboxItem.date && <small>Date: {lightboxItem.date}</small>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
