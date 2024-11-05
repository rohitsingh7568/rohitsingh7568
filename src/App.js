import React from 'react';
import HomePage from './HomePage';
import BrandsSection  from './BrandsSection';
import ServicesSection from './ServicesSection';
import ProjectGallery from './ProjectGallery';
import Testimonials from './Testimonials'
import Testimonial from './Testimonial'
import Footer from './Footer'


function App() {
  return (
    <div className="App">
      <HomePage />
      <BrandsSection/>
      <ServicesSection/>
      <ProjectGallery/>
      <Testimonial/>
      <Testimonials/>
      
      <Footer/>
    </div>
  );
}

export default App;
