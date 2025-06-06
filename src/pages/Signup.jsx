import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  
  const handleRegister = () => {
    
    alert('Register clicked - add your signup logic!');
   
  };

  return (
    <div className="container">
      <div className="signup-window">
        <div className="window-header">
          <span className="title">Signup</span>
          <div className="window-buttons">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
        </div>

        <h2>Sign up</h2>

        <div className="form-group">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" />
        </div>

    

        <div className="btns">
          <button className="register-btn" onClick={() => navigate('/')}>Login</button>
          <button className="login-btn" >Register</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
