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

  return (
    <div className={`App ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onChatHistoryClick={handleChatHistoryClick}
        onStartNewChat={startNewChat}
      />
      <div className="main-content">
        <Header isSidebarOpen={isSidebarOpen} /> {/* isSidebarOpen을 헤더에 전달 */}
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
