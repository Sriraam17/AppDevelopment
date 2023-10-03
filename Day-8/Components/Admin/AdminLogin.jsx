import React, { useState } from 'react';
import '../css/Admin/AdminLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/UserSlice';
import Popup from '../Popup/popup';
/*import useUser from './Components/Context/UserContext';*/

export default function AdminLogin   () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 /*const { login: userLogin } = useUser();*/
  

   const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
   
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
      showMessage('success', 'Login successful!', '/okk');
      dispatch(login({ username: formData.username }));
      /*v    userLogin();*/
  } else {
      showMessage('error', 'Please fill in all fields');
  }
};
  return (
    <div className="login-container2x">
      <div className="login-box">
        <h2 className="hulkk">Admin Login</h2>
        <form onSubmit={submitLoginForm}>
          <div className="input-group">
            <label htmlFor="email">Username</label>
            <input
            name="username"
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={eventHandler}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
            name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={eventHandler}
              required
            />
          </div>
          <button type="submit" className="login-buttona1">
            <Link to='/admindashboard'>Login</Link>
          </button>
        </form>
      </div>
      {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
    </div>
  );
};


