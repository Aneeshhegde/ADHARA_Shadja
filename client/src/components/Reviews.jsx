import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Reviews.css';
import api from '../utils/api';

const Reviews = () => {
  const { t } = useLanguage();
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    studentName: '',
    courseName: 'Indian Classical Music',
    rating: 5,
    review: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Dummy reviews data
  const dummyReviews = [
    {
      _id: '1',
      studentName: 'Priya Sharma',
      courseName: 'Indian Classical Music',
      rating: 5,
      review: 'Exceptional teaching! Shri Vinayak Hegde\'s guidance has transformed my understanding of classical music. Highly recommended!',
      createdAt: new Date('2024-12-15')
    },
    {
      _id: '2',
      studentName: 'Arjun Kumar',
      courseName: 'Indian Classical Music',
      rating: 5,
      review: 'Outstanding academy. The structured approach to learning and personal mentorship is incredible. Worth every moment!',
      createdAt: new Date('2024-12-10')
    },
    {
      _id: '3',
      studentName: 'Anjali Desai',
      courseName: 'Indian Classical Music',
      rating: 4,
      review: 'Great learning experience. The online classes are well-organized and the guru is very dedicated to student progress.',
      createdAt: new Date('2024-12-05')
    },
    {
      _id: '4',
      studentName: 'Vikram Iyer',
      courseName: 'Indian Classical Music',
      rating: 5,
      review: 'Truly blessed to learn from such a master. The depth of knowledge and passion for preserving classical traditions is admirable.',
      createdAt: new Date('2024-11-28')
    }
  ];

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await api.getReviews();
      if (response.data.success) {
        setReviews(response.data.data.length > 0 ? response.data.data : dummyReviews);
      }
    } catch (error) {
      console.log('Using dummy reviews');
      setReviews(dummyReviews);
    }
  };

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
      const response = await api.submitReview(formData);
      if (response.data.success) {
        setMessage(t('reviews.successReview'));
        setFormData({
          studentName: '',
          courseName: 'Indian Classical Music',
          rating: 5,
          review: ''
        });
        fetchReviews();
        setTimeout(() => setMessage(''), 5000);
      }
    } catch (error) {
      setMessage('Error: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} className={i < rating ? 'star filled' : 'star empty'} />
    ));
  };

  return (
    <section id="reviews" className="reviews">
      <div className="reviews-container">
        <h2>{t('reviews.title')}</h2>
        <p className="reviews-subtitle">{t('reviews.subtitle')}</p>

        <div className="reviews-content">
          {/* Reviews Grid */}
          <div className="reviews-grid">
            {reviews.map((review) => (
              <div key={review._id} className="review-card">
                <div className="review-header">
                  <h3>{review.studentName}</h3>
                  <div className="stars">{renderStars(review.rating)}</div>
                </div>
                <p className="course-name">{review.courseName}</p>
                <p className="review-text">{review.review}</p>
                <p className="review-date">
                  {new Date(review.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>

          {/* Review Form */}
          <div className="review-form-wrapper">
            <h3>{t('reviews.shareExperience')}</h3>
            <form className="review-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{t('reviews.name')}</label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.placeholderName')}
                />
              </div>

              <div className="form-group">
                <label>{t('reviews.course')}</label>
                <select
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                >
                  <option value="Beginner Vocal Training">Beginner Vocal Training</option>
                  <option value="Intermediate Classical Music">Intermediate Classical Music</option>
                  <option value="Advanced Hindustani Vocal">Advanced Hindustani Vocal</option>
                  <option value="Children's Music Foundation">Children's Music Foundation</option>
                </select>
              </div>

              <div className="form-group">
                <label>{t('reviews.rating')}</label>
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                >
                  <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
                  <option value="4">⭐⭐⭐⭐ (4/5)</option>
                  <option value="3">⭐⭐⭐ (3/5)</option>
                  <option value="2">⭐⭐ (2/5)</option>
                  <option value="1">⭐ (1/5)</option>
                </select>
              </div>

              <div className="form-group">
                <label>{t('reviews.reviewLabel')}</label>
                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder={t('reviews.placeholderReview')}
                ></textarea>
              </div>

              {message && (
                <div className={`message ${message.includes('Thank you') || message.includes('ಧನ್ಯವಾದ') || message.includes('धन्यवाद') ? 'success' : 'error'}`}>
                  {message}
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? t('reviews.submittingReview') : t('reviews.submitReview')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
