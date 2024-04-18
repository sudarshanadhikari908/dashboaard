import React, { ReactNode } from 'react';
import Sidebar from '../sidebar';
import Header from '../header';
import './layout.css'; // Import layout-specific CSS for styling

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="content-container">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
