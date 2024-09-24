import React from 'react';
import '../../styles/App.css'; // Import your CSS file

import HeaderPage from './HeaderPage';
import ReasonsSection from './ReasonsSection';
import MiddleHeader from './MiddleHeader';
import BottomPage from './BottomPage';
import Footer from './Footer';


const Home = () => {
  return (
    <div className="scrollable-content">
      <HeaderPage />
      <MiddleHeader />
      <ReasonsSection />
      <BottomPage/>
      <Footer/>
    </div>
  );
};

export default Home;
