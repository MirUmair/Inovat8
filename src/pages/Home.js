// src/components/Home.js
import React from 'react';
import '../styles/App.css'; // Import your CSS file
import logo from '../assets/images/Innovat8.svg';

const Home = () => {
  return (
    <div className="App">
      <video className="video-background" autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/background.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img src={logo} alt="Logo" className="logo" />
      <header className="header">
        <h1>We Just Got Here!</h1>
        <p>with a mission to sprinkle innovation!</p>
        <h1>Stay Curious</h1>
        <p>for the thrilling reveal!</p>
      </header>
    </div>
  );
};

export default Home;
