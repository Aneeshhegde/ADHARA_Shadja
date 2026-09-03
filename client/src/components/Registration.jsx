import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Registration.css';
import api from '../utils/api';

const Registration = () => {
  const { t, translations } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    musicExperience: 'Beginner',
    courseTitle: 'Beginner Vocal Training',
    address: '',
    city: '',
    state: 'Karnataka',
    country: 'India'
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
      const response = await api.registerStudent(formData);
      if (response.data.success) {
        setMessage(t('registration.successMsg'));
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          age: '',
          musicExperience: 'Beginner',
          courseTitle: 'Beginner Vocal Training',
          address: '',
          city: '',
          state: 'Karnataka',
          country: 'India'
        });
        setTimeout(() => setMessage(''), 5000);
      }
    } catch (error) {
      setMessage('Error: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  const coursesList = [
    'Beginner Vocal Training',
    'Intermediate Classical Music',
    'Advanced Hindustani Vocal',
    'Children\'s Music Foundation'
  ];

  return (
    <section id="registration" className="registration">
      <div className="registration-container">
        <h2>{t('registration.title')}</h2>
        <p className="registration-subtitle">{t('registration.subtitle')}</p>

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>{t('registration.firstName')}</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder={t('registration.placeholderName')}
              />
            </div>
            <div className="form-group">
              <label>{t('registration.lastName')}</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder={t('registration.placeholderLastName')}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>{t('registration.email')}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('registration.placeholderEmail')}
              />
            </div>
            <div className="form-group">
              <label>{t('registration.phone')}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder={t('registration.placeholderPhone')}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>{t('registration.age')}</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder={t('registration.placeholderAge')}
              />
            </div>
            <div className="form-group">
              <label>{t('registration.experience')}</label>
              <select name="musicExperience" value={formData.musicExperience} onChange={handleChange}>
                <option value="Beginner">{t('registration.expBeginner')}</option>
                <option value="Intermediate">{t('registration.expIntermediate')}</option>
                <option value="Advanced">{t('registration.expAdvanced')}</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>{t('registration.selectCourse')}</label>
            <select name="courseTitle" value={formData.courseTitle} onChange={handleChange}>
              {coursesList.map((courseKey) => {
                const translatedTitle = translations?.courses?.items?.[courseKey]?.title || courseKey;
                return (
                  <option key={courseKey} value={courseKey}>
                    {translatedTitle}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>{t('registration.address')}</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder={t('registration.placeholderAddress')}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>{t('registration.city')}</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder={t('registration.placeholderCity')}
              />
            </div>
            <div className="form-group">
              <label>{t('registration.state')}</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Karnataka"
              />
            </div>
            <div className="form-group">
              <label>{t('registration.country')}</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="India"
              />
            </div>
          </div>

          {message && <div className={`message ${message.includes('successful') || message.includes('ಧನ್ಯವಾದ') || message.includes('सफल') ? 'success' : 'error'}`}>{message}</div>}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? t('registration.submitting') : t('registration.submitBtn')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Registration;
