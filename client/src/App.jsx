import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Guru from './components/Guru';
import Courses from './components/Courses';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Gallery from './components/Gallery';
import Registration from './components/Registration';
import Community from './components/Community';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GalleryPage from './pages/GalleryPage';
import './App.css';

function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Guru />
      <Courses />
      <Achievements />
      <Certifications />
      <Gallery />
      <Registration />
      <Community />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
