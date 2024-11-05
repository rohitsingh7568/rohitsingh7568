import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: '🔍', 
      title: 'Strategy services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus.',
    },
    {
      id: 2,
      icon: '📈', 
      title: 'Marketing services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus.',
    },
    {
      id: 3,
      icon: '🎨', 
      title: 'Design services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus.',
    },
    {
      id: 4,
      icon: '💻', 
      title: 'Development services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus.',
    },{
      id: 3,
      icon: '🎨', 
      title: 'Design services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus.',
    },
    {
      id: 4,
      icon: '💻', 
      title: 'Development services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis luctus lacus.',
    },
  ];

  return (
    <div className="services-section">
      <h3>Our Services</h3>
      <h2>Our agency experts will provide you with a full stack of services</h2>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="icon">{service.icon}</div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <a href="#" className="learn-more">Learn more</a>
          </div>
        ))}
      </div>
      <button className="explore-btn">Explore all services</button>
    </div>
  );
};

export default ServicesSection;
