
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="signup-window">
        <div className="window-header">
          <span className="title">Login</span>
          <div className="window-buttons">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
        </div>

        <h2>Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" />
        </div>

        <div className="btns">
          <button className="register-btns" onClick={() => navigate('/dashboard')}>Login</button>
          <button className="login-btns" onClick={() => navigate('/signup')}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
