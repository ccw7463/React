import React from 'react';
import { FiEdit } from 'react-icons/fi'; 
import { FiMenu } from 'react-icons/fi'; 

const Sidebar = ({ isOpen, toggleSidebar, onChatHistoryClick, onStartNewChat }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        <FiMenu size={24} />
      </button>
      <div className="menu-buttons">
        <button className="icon-button" onClick={onStartNewChat}>
          <FiEdit size={24} />
        </button>
      </div>
      {isOpen && (
        <ul>
          <li onClick={() => onChatHistoryClick(1)}>Chat History 1</li>
          <li onClick={() => onChatHistoryClick(2)}>Chat History 2</li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
