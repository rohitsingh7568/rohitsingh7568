import React from 'react';
import './HomePage.css';
import logo from '../src/images/logo.jpg';  

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Socialisthan Logo" className="logo-image" />
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#blog">Blog</a>
          <a href="#services">Services</a>
        </nav>
        <button className="contact-btn">Contact us</button>
      </header>

      <main className="main-content">
        <h1 className="headline">Global Brandmakers <br /> making <span className="highlight">Socialisthan</span></h1>
        <div className="action-buttons">
          <button className="explore-btn">Explore our services</button>
          <button className="watch-reel-btn">Watch our reel</button>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
