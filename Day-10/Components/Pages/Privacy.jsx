
import React from 'react';
import '../css/Privacy.css';
import Footera from './Footera';

const Privacy = () => {
  return (
    <div>
        <div className="about-us">
        <header>
                   <h1 className="name2">BIDBUNNY🐰</h1>
                   <h3>The Pinnacle of Auctions!!</h3>
        </header>
        </div>
     <div className="privacy-policy">
      <h1>Privacy Policy</h1><br/>
      <p>Please read this before using the BidBunny website or submitting any personal information. The following Privacy Policy outlines the information BidBunny may collect and how we may use it. BidBunny is a service provided by BidBunny Corporation,
      You may use Bidderboy at any time without registering. When you visit our website, data is saved in an anonymous format, as is the website that you visit us from, the websites that you proceed to from our site, and your IP address. No personal 
      data is associated with during this process.We collect only the Personal Information you provide to us. We would therefore like to request that you agree to the collection and storage of some of your data.
      </p>

      <h2>Information We Collect</h2><br/>
      <p>We may collect personal information that you provide directly to us, such as your name, email address, and any other information you choose to provide.
      Our website contains forms that directly pass such information on to our payment processor; the only part stored in our system is the service used, the 
      date of the transaction, if it was successful and any error messages provided by the payment processor.
      </p>
      
      <h2>The Use of Cookies at our Website</h2><br/>
      <p>
      BidBunny uses so-called "cookies", which are alphanumeric identifiers that are stored on your computer that can be retrieved to assist in customizing your
      experience with the online service. The information saved supports the functionality of the site, for example to recognize your browser and to provide 
      features like keeping track of your visual preferences or controlling the frequency of "pop-up" windows.
      You are free to prevent cookies from being saved on your hard drive by adjusting the corresponding settings in your browser. However, turning off these 
      settings may result in limited functionality.
      </p>

      <h2>Security</h2><br/>
      <p>The information in your BidBunny account and in your BidBunny profile is password protected, so that only you have access to this personal information. Please note that you are not permitted to disclose your password to anyone else.
      BidBunny will never ask for your password in e-mails that you receive unexpectedly or that you did not request.
      At present, this is the safest way to ensure that no one has access to your personal information. We assume no liability for the abuse of login data and passwords used.
      </p>

      <h2>Updation</h2><br/>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
    </div>
    <Footera />
 </div> 
  );
};

export default Privacy;
