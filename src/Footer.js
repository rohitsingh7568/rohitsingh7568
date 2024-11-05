// App.js
import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container">
      <div className="call-to-action">
        <div className="background-image" />
        <div className="overlay">
          <div className="cta-content">
            <h2>Ready for your project</h2>
            <button>Get in touch</button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="logo">Waves</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#blog">Blog</a>
          <a href="#services">Services</a>
        </nav>
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </footer>
    </div>
  );
};

export default Footer;