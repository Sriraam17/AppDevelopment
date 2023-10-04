import React, { useState } from 'react';
import '../css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/UserSlice';
import Popup from '../Popup/popup';
/*import useUser from './Components/Context/UserContext';*/


export default function Login   () {
  const navigate = useNavigate();
  /*const { login: userLogin } = useUser();*/
  
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
   
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [message, setMessage] = useState({
        type: '',
        content: '',
        url: '',
        btn: ''
    });

   
    const showMessage = (type, content, url = '', btn = 'Got it') => {
      setMessage({ type, content, url, btn });
      setPopupVisible(true);
   };
    const handleGotItClick = () => {
        if (message.url) {
            navigate(message.url);
        }
        setPopupVisible(false);
      };
  const eventHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

const submitLoginForm = (e) => {
  e.preventDefault();
  const formValues = Object.values(formData);
  if (!formValues.some((value) => !value)) {
      showMessage('success', 'Login successful!', '/admindashboard');
      dispatch(login({ username: formData.username }));
      /*  userLogin();*/
  } else {
      showMessage('error', 'Please fill in all fields');
  }
};

const handlePaste = (e) => {
  e.preventDefault();
  showMessage('error' , 'Restricted action');
}
  return (  
    <div>
      
    <div className="login-container">
      <div className="login-box">
        <h2 className="logod">Login</h2>
        <form onSubmit={submitLoginForm}>
          <div className="input1-group">
            <label className='op'>Username</label>
            <input
            name="username"
            type="text"
            placeholder="Enter your username"
              value={formData.username}
              required
              onChange={eventHandler}
            />
          </div>
          <div className="input1-group">
            <label className='op'>Password</label>
            <input
            name="password"
            type="password"
              placeholder="Enter your password"
              value={formData.password}
              required
              onChange={eventHandler}
              onPaste={handlePaste}
              />
          </div>
          <button type="submit" className="login-buttonpl">
            Login<Link to='/opt'></Link>
          </button>
          <div>
            <p className="dha">Don't have an account?<Link to="dashboard">Signup</Link></p>             
          </div>
        </form>
      </div>
      {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
    </div>
  </div>
             
             
  );
};


