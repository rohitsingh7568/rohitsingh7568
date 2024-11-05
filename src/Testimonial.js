import React, { useState } from 'react';
import './Testimonial.css';

import image from '../src/images/girl.jpg.jpg';  // Correct the path here

const testimonials = [
  {
    name: 'Kshitiz Sharma',
    title: 'Chair Man ',
    company: ' Socialisthan Ltd.',
    feedback: 'Waves demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity.',
    image: image 
  }
];

const Testimonial = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(2);

  const showMoreTestimonials = () => {
    setVisibleTestimonials((prevCount) => prevCount + 2);
  };

  return (
    <div className="testimonials-section">
      <h2>About Us</h2>
      <div className="testimonials-container">
        {testimonials.slice(0, visibleTestimonials).map((testimonial, index) => (
          <div key={index} className="testimonial-card1">
            <div className="testimonial-content">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image1" />
              <div>
                <p className="testimonial-feedback1">{testimonial.feedback}</p>
                <p className="testimonial-name1">{testimonial.name}</p>
                <p className="testimonial-title1">{testimonial.title} ({testimonial.company})</p>
              </div>
            </div>
            {/* <div className="testimonial-decorator1" /> */}
          </div>
        ))}
      </div>
      {/* {visibleTestimonials < testimonials.length && (
        <button className="show-more-button" onClick={showMoreTestimonials}>
          Show More
        </button>
      )} */}
    </div>
  );
};

export default Testimonial;
