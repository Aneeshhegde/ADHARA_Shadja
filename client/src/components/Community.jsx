import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Community.css';
import api from '../utils/api';

const Community = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleContribute = async () => {
    const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY_ID;

    if (!razorpayKey || razorpayKey.includes('YOUR_')) {
      alert('Payment setup is incomplete. Please configure REACT_APP_RAZORPAY_KEY_ID in client/.env and Razorpay keys in server/.env.');
      return;
    }

    if (!window.Razorpay) {
      alert('Razorpay SDK not loaded. Please refresh and try again.');
      return;
    }

    setIsProcessing(true);
    try {
      // Create payment order
      const orderResponse = await api.createPaymentOrder({
        amount: 500, // ₹500 default contribution
        currency: 'INR',
        description: 'Contribution to ADHARA SHADJA Gurukula'
      });

      if (!orderResponse.data.success) {
        alert('Failed to create payment order');
        setIsProcessing(false);
        return;
      }

      const order = orderResponse.data.data;

      // Initialize Razorpay
      const options = {
        key: razorpayKey,
        amount: order.amount,
        currency: order.currency,
        name: 'ADHARA SHADJA',
        description: order.description,
        order_id: order.id,
        handler: async (response) => {
          // Verify payment
          const verifyResponse = await api.verifyPayment({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature
          });

          if (verifyResponse.data.success) {
            alert('Thank you for your contribution! Your support means a lot to us.');
          } else {
            alert('Payment verification failed');
          }
        },
        prefill: {
          name: 'Student',
          email: 'student@example.com',
          contact: '9000090000'
        },
        theme: {
          color: '#8b4513'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      alert('Error: ' + (error.response?.data?.message || error.message));
    } finally {
      setIsProcessing(false);
    }
  };
  const { t } = useLanguage();

  return (
    <section id="community" className="community">
      <div className="community-container">
        <h2>{t('community.title')}</h2>
        <p className="community-subtitle">{t('community.subtitle')}</p>

        <div className="community-content">
          <p className="community-intro">
            {t('community.intro')}
          </p>

          <div className="community-features">
            <div className="feature">
              <h3>{t('community.forums')}</h3>
              <p>{t('community.forumsDesc')}</p>
            </div>
            <div className="feature">
              <h3>{t('community.events')}</h3>
              <p>{t('community.eventsDesc')}</p>
            </div>
            <div className="feature">
              <h3>{t('community.networking')}</h3>
              <p>{t('community.networkingDesc')}</p>
            </div>
            <div className="feature">
              <h3>{t('community.resources')}</h3>
              <p>{t('community.resourcesDesc')}</p>
            </div>
          </div>

          <h3 className="follow-us">{t('community.followUs')}</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/Adharashadjatrust/" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
              <FaFacebook /> Facebook
            </a>
            <a href="https://www.instagram.com/adharashadja?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
              <FaInstagram /> Instagram
            </a>
            <a href="https://www.youtube.com/channel/UCFrnrrpkXg2s6xcJ8mw7yFA" target="_blank" rel="noopener noreferrer" className="social-btn youtube">
              <FaYoutube /> YouTube
            </a>
            <a href="https://chat.whatsapp.com/HcCDexsZqEPFZYDxsBUr9C?mode=gi_t" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>

          <div className="contribute-section">
            <h3>{t('community.supportMission')}</h3>
            <p>{t('community.supportDesc')}</p>
            <button onClick={handleContribute} className="contribute-btn" disabled={isProcessing}>
              {isProcessing ? t('community.processing') : t('community.contributeBtn')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
