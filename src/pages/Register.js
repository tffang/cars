import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css'; // 复用 Login.css 的样式文件

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 确认两次输入的密码一致
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // 发送注册请求到后端
    axios
      .post('http://127.0.0.1:8000/api/register/', { email, password, username })
      .then((response) => {
        setSuccessMessage('Registration successful! You can now log in.');
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage('Registration failed. Please try again.');
        console.error('Error during registration:', error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <div className="button-container">
            <button type="submit" className="login-button">Register</button>
          </div>
          <p className="register-link">
            Already have an account? <a href="/login">Log in here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
