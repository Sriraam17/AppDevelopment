import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'

function Signup() {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form>
        <div className="form-group">
          <input type="text" placeholder="First Name" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="form-group123">
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>
  );
}

export default Signup;