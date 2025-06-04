// src/Components/Home.js
import React from 'react';


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-hero">
        <video autoPlay muted loop playsInline className="background-video">
          <source src="https://cdn.coverr.co/videos/coverr-making-coffee-7305/1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="home-content">
          <h1 className="home-title">Perk Up Café</h1>
          <p className="home-subtitle">Perk up your day with every sip.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
