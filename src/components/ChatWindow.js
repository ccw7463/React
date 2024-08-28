import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import InputBox from './InputBox';

const ChatWindow = ({ initialMessages = [], onSend, showInitialMessage }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [isInitialMessageVisible, setIsInitialMessageVisible] = useState(showInitialMessage); // 초기 메시지 상태 관리
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom(); // 새로운 메시지가 추가될 때 스크롤을 아래로 이동
  }, [messages]);

  useEffect(() => {
    setMessages(initialMessages);
    if (initialMessages.length > 0) {
      setIsInitialMessageVisible(false); // 대화 내역이 있으면 초기 메시지 숨김
    }
  }, [initialMessages]);

  useEffect(() => {
    setIsInitialMessageVisible(showInitialMessage); // 새로운 대화를 시작할 때 초기 메시지 상태를 업데이트
  }, [showInitialMessage]);

  const handleSend = async (message) => {
    if (isInitialMessageVisible) {
      setIsInitialMessageVisible(false); // 첫 메시지를 보낼 때 초기 메시지를 숨김
    }

    const userMessage = { sender: 'user', text: message };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await fetch('http://localhost:7860/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.reply };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chat-window">
      {isInitialMessageVisible && (
        <div className="initial-message">
          <span className="greeting">창우님, 안녕하세요 </span>
          <span className="subtext">무엇을 도와드릴까요?</span>
        </div>
      )}
      <div className="messages-container">
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.text} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <InputBox onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
