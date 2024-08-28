import React from 'react';

const Header = ({ isSidebarOpen }) => {
  return (
    <div className={`header ${isSidebarOpen ? 'header-open' : 'header-closed'}`}>
      <h1>AtlasBot</h1>
    </div>
  );
};

export default Header;