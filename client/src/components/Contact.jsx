import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Contact.css';
import api from '../utils/api';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await api.sendContactMessage(formData);
      if (response.data.success) {
        setMessage(t('contact.successMsg'));
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setMessage(''), 5000);
      }
    } catch (error) {
      setMessage('Error: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>{t('contact.title')}</h2>
        <p className="contact-subtitle">{t('contact.subtitle')}</p>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-card">
              <FaPhone className="info-icon" />
              <h3>{t('contact.phone')}</h3>
              <p>+91-7019673965</p>
              <p>{t('contact.phoneHours')}</p>
            </div>

            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h3>{t('contact.email')}</h3>
              <p>adharashadja@gmail.com</p>
              <p>admissions@adharashadja.com</p>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>{t('contact.location')}</h3>
              <p>{t('contact.locationPlace')}</p>
              <p>{t('contact.locationState')}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{t('contact.nameLabel')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.placeholderName')}
                />
              </div>

              <div className="form-group">
                <label>{t('contact.emailLabel')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.placeholderEmail')}
                />
              </div>

              <div className="form-group">
                <label>{t('contact.phoneLabel')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contact.placeholderPhone')}
                />
              </div>

              <div className="form-group">
                <label>{t('contact.subjectLabel')}</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.placeholderSubject')}
                />
              </div>

              <div className="form-group">
                <label>{t('contact.messageLabel')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder={t('contact.placeholderMessage')}
                ></textarea>
              </div>

              {message && <div className={`message ${message.includes('Thank you') || message.includes('ಧನ್ಯವಾದ') || message.includes('धन्यवाद') ? 'success' : 'error'}`}>{message}</div>}

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? t('contact.sendingBtn') : t('contact.sendBtn')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
