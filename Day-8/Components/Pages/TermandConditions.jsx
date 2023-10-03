import React, { Component } from 'react';
import '../css/TermsandConditions.css';
import Footera from './Footera';

class TermandConditions extends Component {
    render() {
        return (
            <div>
            <div className="about-us">
                <header>
                   <h1 className="name2">BIDBUNNY🐰</h1>
                   <h3>The Pinnacle of Auctions!!</h3>
               </header>
            </div>
             <div className="terms-and-conditions">
             <h1 className="tac">Terms and Conditions</h1>
       
             <h2>1. Introduction</h2>
             <p>
               Welcome to BidBunny.These terms and conditions
               govern your use of our website and services. By using our website, you
               accept these terms and conditions in full.
               BidBunny is not liable or responsible for the actions of users or other 
               individuals who have read or been informed of such information or other written material.
               BidBunny undertakes to follow all local tax legislation for the sale of bid packages and 
               goods in the countries in which it operates, such as payment of VAT.
               BidBunny reserves the right to change these Terms & Conditions at any time without notice to You.
             </p>
       
             <h2>2. Acceptance of Terms and Conditions</h2>
             <p>
             By accepting the Terms & Conditions and/or registering with BidBunny, You confirm that You are eligible
              (as specified in the "Eligibility" section) to use BidBunny. 
             If You do not agree to the Terms & Conditions, please do not use BidBunny.
             If You access and use any service from BidBunny, You agree to and are bound by these Terms & Conditions.
             </p>
       
             <h2>3. Eligibility</h2>
             <p>
             By accepting the Terms & Conditions and/or registering on BidBunny, You confirm that You are at least 
             18 years of age and at least age of majority subject to the laws of the state, city or other legal entity;
              therefore You can engage in a binding contract. By using BidBunny, You warrant that You have the right, 
              authority, and capacity to enter into this agreement and to abide by all of the Terms & Conditions. By 
              registering on BidBunnyy, the user declares that they are legally capable of entering into binding contracts.
               BidBunny employees and their family members may not, under any circumstances, participate in BidBunny auctions.
             BidBunny products and services are offered exclusively to private users and not to commercial or semi-commercial retailers.
             BidBunny reserves the right to limit the number of user accounts per household. A user may not use any external software to
              automatically place bids in the auctions.
            BidBunny reserves the right, at its sole discretion, to deactivate any user’s account based on suspicion of the use of such software.
             </p>
       
             <h2>4. Working of Auction</h2>
             <p>
             When a bid is placed, number of credits are deducted from the user’s bidding account as per the specified number of credits for that auction. 
             Placed bids are not refundable. An auction closes when no more bids are received by BidBunny’s servers. The countdown time is indicated for each
             auction. Due to the time it takes for bids to reach BidBunny’s servers, and in order to allow all users the same opportunity to bid regardless of
            geographic location, BidBunny’s servers will wait for an additional 5 seconds for any placed bids to reach BidBunny servers before closing the auction.
            The user who was the last to place a bid wins the auction and can purchase the product.
            Bids become valid when they are entered in the BidBunny database and registered in BidBunny’s system. BidBunny is not responsible for disruptions in the 
            user’s connection and errors that may occur as a result of this. This includes, but is not limited to, incorrect countdown of the remaining time, outdated information on bidders, and bids.
             </p>
       
             <h2>5. Payment</h2>
             <p>
             Once an auction is closed, the winner, goes to My Account for information on the total price, including shipping costs, and payment options. 
             Once the auction is closed, the winner has 15 days to pay the total price of the product, by following the steps indicated on the website. After 
             confirming the win and paying the amount due, the winner will receive a confirmation e-mail. BidBunny will ship the product within 21 days after 
             payment confirmation is received. The buyer must also provide an accurate delivery address on the account, before BidBunny can ship the product. 
             After BidBunny has shipped the product, it will take a few days for it to reach the buyer.
             If an auction win has not been confirmed and paid within 15 days, the order will be void and cancelled, spent bids will not be refunded.
             </p>
       
             <h2>6. Delivery</h2>
             <p>
             As BidBunny works with trusted delivery partners to ensure the best possible service and widest reach, all delivery estimates are for information
              only and do not constitute binding agreements. Obvious damage to the item or packaging during transit should be reported to the carrier by the 
              winning user, if the item is damaged it should be refused, not signed for. If you wish to claim for concealed defects or damage after signing for
               an item, you must inform us about the damaged or faulty goods within 3 days of receipt. BidBunny cannot accept responsibility for damaged or 
               faulty goods once 3 days have lapsed. In all cases you must inspect your item either at the point of or immediately after delivery. Failure to 
               raise a query with BidBunny, concerning a damaged or incorrect item within 3 days of delivery constitutes acceptance of the item as is.
                BidBunny does not accept liability for damage or failure of products due to neglect or misuse by the recipient. In the event that BidBunny’s 
                delivery partners are not able to deliver the item within a reasonable time.
             </p>

             <h2>7. Returns-Refunds</h2>
             <p>
             The product will be delivered to the address specified by the user. All technical service and product support matters must be taken up directly 
             with the manufacturer according to their terms. In case of cancellation of an order, only the purchase price will be refunded. So, shipping costs 
             and spent bids will never be refunded. This policy applies both to auctions and Buy Now option. If you decide to return a product/item, 
             BidBunny will not refund the value of the placed bids of a purchased product/item.
             </p>

             <h2>8. Applicable Law</h2>
             <p>
             These Terms & Conditions shall be governed and construed in accordance with the laws of India. Furthermore, these Terms & Conditions shall exclude
              application of the UN Convention on the International Sale of Goods.
             </p>
           </div>
          <Footera /> 
        </div>   
        );
    }
}

export default TermandConditions;