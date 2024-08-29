// src/App.js
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './styles.css';
import Login from './Login';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [showInitialMessage, setShowInitialMessage] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleChatHistoryClick = (chatId) => {
    setCurrentChatId(chatId);
    setMessages([]);
    setShowInitialMessage(false);
  };

  const handleSend = (message) => {
    const userMessage = { sender: 'user', text: message };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
  };

  const startNewChat = () => {
    setMessages([]);
    setCurrentChatId(null);
    setShowInitialMessage(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // 로그인 상태 변경
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />; // 로그인되지 않았을 때 로그인 페이지를 표시
  }

  return (
    <div className={`App ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onChatHistoryClick={handleChatHistoryClick}
        onStartNewChat={startNewChat}
      />
      <div className="main-content">
        <Header isSidebarOpen={isSidebarOpen} />
        <ChatWindow
          initialMessages={messages}
          onSend={handleSend}
          showInitialMessage={showInitialMessage}
        />
      </div>
    </div>
  );
}

export default App;