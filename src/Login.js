// src/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 로직을 여기서 처리합니다.
    // 예: API 호출을 통해 인증 확인 후 onLogin 콜백 호출
    if (email === 'admin' && password === 'admin') {
      onLogin(); // 인증 성공 시 메인 페이지로 이동
    } else {
      alert('사용자 정보가 올바르지 않습니다.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;