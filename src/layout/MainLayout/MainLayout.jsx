import React from 'react';
// COMPONENTS
import Header from './Header/Header';
import { MemoizedMain } from './Main/Main';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <MemoizedMain />
    </div>
  );
};

export default MainLayout;
