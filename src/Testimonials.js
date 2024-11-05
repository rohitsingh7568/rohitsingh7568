import React, { useState } from 'react';
import './Testimonials.css';
import image from '../src/images/girl.jpg.jpg'; 

const testimonials = [
  {
    name: 'Jerome Bell',
    title: 'President of Sales',
    company: 'Binford Ltd.',
    feedback: 'Waves demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity.',
    image: image  
  },
  {
    name: 'Sarah Johnson',
    title: 'CEO',
    company: 'TechCorp',
    feedback: 'The team at Waves is amazing! They took our ideas and turned them into something beautiful and functional.',
    image: image 
  },
  {
    name: 'Alex Tan',
    title: 'Marketing Director',
    company: 'MarketPro',
    feedback: 'Waves brought our brand to life! Their designs are intuitive and have a real impact on our customers.',
    image: image 
  },
  {
    name: 'Emily Chen',
    title: 'Product Manager',
    company: 'Innovate Inc.',
    feedback: 'Waves has an excellent design sense and made the user experience of our product seamless.',
    image: image  // use the imported variable here
  }
];

const Testimonials = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(2);

  const showMoreTestimonials = () => {
    setVisibleTestimonials((prevCount) => prevCount + 2);
  };

  return (
    <div className="testimonials-section">
      <h2>What our great customers say</h2>
      <div className="testimonials-container">
        {testimonials.slice(0, visibleTestimonials).map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div>
                <p className="testimonial-feedback">{testimonial.feedback}</p>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-title">{testimonial.title} ({testimonial.company})</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleTestimonials < testimonials.length && (
        <button className="show-more-button" onClick={showMoreTestimonials}>
          Show More
        </button>
      )}
    </div>
  );
};

export default Testimonials;
