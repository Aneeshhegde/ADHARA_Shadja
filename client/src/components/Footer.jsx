import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3>ADHARA SHADJA</h3>
            <p>{t('footer.aboutText')}</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>{t('footer.quickLinks')}</h3>
            <ul>
              <li><a href="#hero">{t('footer.home')}</a></li>
              <li><a href="#about">{t('footer.aboutUs')}</a></li>
              <li><a href="#online-classes">{t('footer.courses')}</a></li>
              <li><a href="#contact">{t('footer.contact')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>{t('footer.contactInfo')}</h3>
            <p>Email: adharashadja@gmail.com</p>
            <p>Phone: +91-7019673965</p>
            <p>{t('contact.location')}: {t('contact.locationPlace')}, {t('contact.locationState')}</p>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3>{t('footer.followUs')}</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/Adharashadjatrust/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebook /></a>
              <a href="https://www.instagram.com/adharashadja?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
              <a href="https://www.youtube.com/channel/UCFrnrrpkXg2s6xcJ8mw7yFA" target="_blank" rel="noopener noreferrer" className="social-icon"><FaYoutube /></a>
              <a href="https://chat.whatsapp.com/HcCDexsZqEPFZYDxsBUr9C?mode=gi_t" target="_blank" rel="noopener noreferrer" className="social-icon"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} ADHARA SHADJA Gurukula. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
