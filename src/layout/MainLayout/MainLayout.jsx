import React from 'react';
// COMPONENTS
import Header from './Header/Header';
import { MemoizedMain } from './Main/Main';
import { MemoizedPosts } from './Posts/Posts';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <MemoizedMain />
      <MemoizedPosts />
    </div>
  );
};

export default MainLayout;
