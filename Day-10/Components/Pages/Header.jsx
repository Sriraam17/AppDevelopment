import React from 'react'
import "../css/head.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/UserSlice';

export default function Header() {
  
  const user=useSelector(selectUser);
  // let sed = JSON.stringify(user.username);
  // const username = user.user && user.username?user.username:'Guest';
 console.log(user.username)
  return (
                         
                <div className="conthome">
                    <h1 className="namehead" >BIDBUNNY🐰</h1><br/>
                    <p className="juk">The Pinnacle of Auctions!!</p> 
                    <div className="reduxname">
                       {user.username}
                    </div>
                </div>                         
            
         )
}
