import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="box">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className="btns">
          <button onClick={() => navigate('/dashboard')}>Login</button>
          <button onClick={() => navigate('/signup')}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
