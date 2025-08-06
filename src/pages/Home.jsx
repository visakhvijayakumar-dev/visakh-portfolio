import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content-with-photo">
        <div className="home-text-content">
          <p className="home-subtitle">
            SOFTWARE ENGINEER • IBM HYPER BLUE
          </p>
          
          <h1 className="home-title">
            Visakh<br />
            Vijayakumar
          </h1>
          
          <div className="home-description">
            <p>
              I'm a software engineer at IBM India Software Labs with seven years of experience 
              building enterprise applications. Currently part of the Hyper Blue AI incubator, 
              I'm expanding into generative AI and machine learning, developing AI-powered products 
              while continuously learning and growing in this exciting field.
            </p>
          </div>
        </div>

        <div className="home-photo-section">
          <div className="home-photo-container">
            {/* Replace the src with your actual photo path */}
            <img 
              src="/src/assets/images/visakh.png" 
              alt="Visakh Vijayakumar"
              className="home-photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;