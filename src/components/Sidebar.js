import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? '<<' : '>>'}
      </button>
      {isOpen && (
        <ul>
          <li>Chat History 1</li>
          <li>Chat History 2</li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
