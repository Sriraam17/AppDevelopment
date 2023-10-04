import React from 'react';
import '../src/Components/css/Home.css';
import Footera from './Components/Pages/Footera';
import hujk from '../src/Components/Images/auction-item-1.jfif';
import popns from '../src/Components/Images/watch.webp'
import { useNavigate } from 'react-router-dom';


function Home(){
    const navigate = useNavigate();
    const handleclick =()=>{
        navigate("/login")
    }
        return (
            <div>
            <div className="about-us">
                <header>
                   <h1 className="name2">BIDBUNNY🐰</h1>
                   <h3>The Pinnacle of Auctions!!</h3>
                   <button type="submit" className="logobutton"onClick={handleclick}>
                        Login
                   </button>
               </header>
            </div>   
          <section className="auctions">
          <h2>Featured Auctions</h2>
          {/* Display featured auctions */}
          <div className="auction-cardts">
            <img src={popns} alt="Auction Item 1" />
            <h3>Auction Item 1</h3>
            <p>Current Bid: $100</p>
            
          </div>
          <div className="auction-cardts">
            <img src={hujk} alt="Auction Item 2" />
            <h3>Auction Item 2</h3>
            <p>Current Bid: $75</p>
          {/* Add more featured auctions here */}
          </div>
      </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <Footera />    
    </div>
                       
 );
    } 


export default Home;


