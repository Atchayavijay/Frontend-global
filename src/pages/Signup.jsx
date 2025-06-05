import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="box">
        <h2>Sign up</h2>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <div className="btns">
          <button onClick={() => navigate('/')}>Login</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
