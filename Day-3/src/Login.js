import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import animationdata from './Animation.json'
import Lottie from 'react-lottie';

function Login() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationdata,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
   
   
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <input type="text" placeholder="Username" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" />
        </div>
        <div className="submi">
          <button type="submit">Login</button>
        </div>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    <div>
        <Lottie options={defaultOptions} height={400} width={400} />
    </div>
    </div>
  );
}

export default Login;