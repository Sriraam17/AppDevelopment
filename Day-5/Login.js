import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


export default function Login   () {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="text"
              placeholder="Enter your username"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login<Link to='/opt'></Link>
          </button>
          <div>
            <p>Don't have an account?<Link to="/oct">Signup</Link></p>
            
          </div>
        </form>
      </div>
    </div>
  );
};


