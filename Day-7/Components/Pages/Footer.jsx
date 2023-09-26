import React from "react";
import '../css/Footer.css';
import { Link } from "react-router-dom";
 function Footer(){
    return(
        <>
        <div className="footer">
        <div className="foot">
            <div className="ft">Copyright©2023 Cybertronz</div>
            <div className="ft">
                <Link to ="/faq" > FAQ </Link>
            </div>
            <div className="ft">
                <Link to ="/pripolicy" >Privacy Policy</Link>
            </div>    
            <div className="ft">
                <Link to ="/term" >Terms and Conditions </Link>
            </div>
            <div className="ft">
                <Link to="/login"> Admin</Link>
            </div>
        </div>
        </div>
        </>
        
    )
}
export default Footer;