import React from 'react';
// COMPONENTS
import Header from './Header/Header';
import Main from './Main/Main';
// STYLES
import './MainLayout.scss';

const MainLayout = () => {
  return (
    <div className="mainLayout">
      <Header />
      <Main />
    </div>
  );
};

export default MainLayout;
