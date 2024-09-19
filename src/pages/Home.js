import React from 'react';
import '../styles/App.css'; // Import your CSS file

import HeaderPage from './HeaderPage';
import ReasonsSection from './ReasonsSection';
import MiddleHeader from './MiddleHeader';
import BottomPage from './BottomPage';


const Home = () => {
  return (
    <div className="scrollable-content">
      <HeaderPage />
      <MiddleHeader />
      <ReasonsSection />
      <BottomPage/>
    </div>
  );
};

export default Home;
