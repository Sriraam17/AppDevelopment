import React from "react";
import '../css/Footera.css';
import { Link } from "react-router-dom";
 function Footera(){
    return(
        <>
        <div className="footerak">
        <div className="footn">
            <div>
                <p className="cpy">Copyright©2023 All rights reserved.</p>
            </div>
            <div className="ft">
                <Link to ="/taq" > Terms and Conditions </Link>
            </div>
            <div className="ft">
                <Link to ="/pripolicy" >Privacy Policy</Link>
            </div>    
            <div className="ft">
                <Link to ="/abus" >About us</Link>
            </div>
            <div className="ft">
                <Link to="/faq">FAQ</Link>
            </div>
            <div className="ft">
                <Link to="/Adminlogin"> Admin</Link>
            </div>
        </div>
        </div>
        </>
        
    )
}
export default Footera;