import React, { useState } from 'react'
import Header from '../Pages/Header'
import AdminSide from '../NavBar/AdminSide'
import '../css/Admin/AdminProduct.css'
import { login } from '../Redux/UserSlice';
import animationPata from '../lottie/Animation.json';
import { useDispatch } from 'react-redux';
import Lottie from 'react-lottie';


export default function Adminuser() {

    const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    };

    const [formData, setFormData] = useState({
        productname: '',
        AuctionId: '',
        Time:'',
        price:'',
        biddername:''
        
    });

   

    const eventHandler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
      };

      const [isPopupVisible, setPopupVisible] = useState(false);
      const [message, setMessage] = useState({
          type: '',
          content: '',
          url: '',
          btn: ''
      });

      const dispatch = useDispatch();
      
      const submitLoginForm = (e) => {
        e.preventDefault();
        const formValues = Object.values(formData);
        if (!formValues.some((value) => !value)) {
            showMessage('success', 'Login successful!', );
            
            dispatch(login({ username:formData.username }));
            // dispatch(login({ password:formData.password }));
        } else {
            showMessage('error', 'Please fill in all fields');
        }
      };
      const showMessage = (type, content, url = '', btn = 'Got it') => {
        setMessage({ type, content, url, btn });
        setPopupVisible(true);
    };

    const defaultOptions = {
      loop:true,
      autoplay: true,
      animationData: animationPata,
      rendereSettings:{
        preserveAspectRatio:"xMidYMid slice"
      }
    };
  return (
    <div>
        <Header OpenSidebar={OpenSidebar}/>
      <AdminSide openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {/* <Footer /> */}
      <div className='lutt1'>
      <div className='lotte1'>
          <Lottie
            options={defaultOptions}
            height={510}
            width={700}
          />
      </div>
        <div className="container-saran">
        <h2>ADD PRODUCTS</h2>

        <form onSubmit={submitLoginForm}>
  <div className="input-group">
    <label>Product Name:</label>
    <input
      type="text"
      name="productname" 
      value={formData.productname}
      required
      placeholder="Enter the product name"
      onChange={eventHandler}
    />
  </div>
  <div className="input-group">
    <label>Seller Name:</label>
    <input
      name="AuctionId" 
      type="text"
      value={formData.AuctionId}
      required
      placeholder="Enter Seller Name"
      onChange={eventHandler}
    />
  </div>
  <div className='input-group'>
              <label>Product ID:</label>
              <input
                name='Time'
                type='number'
                value={formData.Time}
                required
                placeholder='Enter Product id'
                onChange={eventHandler}
              />
            </div>
            <div className='input-group'>
              <label>Estimated price:</label>
              <input
                name='pricer'
                type='number'
                value={formData.price}
                required
                placeholder='Enter your Estimated price'
                onChange={eventHandler}
              />
            </div>
            <div className='input-group'>
              <label>Bidding Price:</label>
              <input
                name='price'
                type='number'
                value={formData.price}
                required
                placeholder='Enter bidding price'
                onChange={eventHandler}
              />
            </div>
            <div className='input-group'>
              <label>Product Image:</label>
              <input
                name='biddername'
                type='url'
                value={formData.biddername}
                required
                placeholder='Pass the URL'
                onChange={eventHandler}
              />
            </div>
          {/* {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />} */}
          <div className='button-container22'>
            <button type='submit' >ADD</button>
          </div>
        </form>
        </div>
        </div>
      
       </div>    
      )
}