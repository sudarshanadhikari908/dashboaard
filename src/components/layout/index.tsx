import React, { ReactNode } from 'react';
import Sidebar from '../sidebar';
import Header from '../header';
import './layout.css'; // Import layout-specific CSS for styling

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="content-container">
        <Sidebar />
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
