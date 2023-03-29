import React from "react";
import "../styles/footer.css";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content-all">
        <div className="footer-company">
          <h2 className="footer-comlogo">Company Logo</h2>
          <div className="footer-icons">
            <img src={facebook} alt="fblogo" />
            <img src={linkedin} alt="instalogo" />
            <img src={instagram} alt="linkinlogo" />
            <img src={twitter} alt="websitelogo" />
            {/* <img src="" alt="twitterlogo" /> */}
          </div>
          <div className="footer-address">
            <h3 className="footer-heading">Address</h3>
            <p className="footer-sub-heading">+123 456 789</p>
            <p className="footer-sub-heading">877 The bronx, NY</p>
            <p className="footer-sub-heading">14568, US</p>
          </div>
        </div>
        <div className="footer-myaccount">
          <h3 className="footer-heading">My Account</h3>
          <h4 className="footer-sub-heading">Sign in</h4>
          <h4 className="footer-sub-heading">Register</h4>
          <h4 className="footer-sub-heading">Order Status</h4>
        </div>
        <div className="footer-help">
          <h3 className="footer-heading">Help</h3>
          <h4 className="footer-sub-heading">Shipping</h4>
          <h4 className="footer-sub-heading">Returns</h4>
          <h4 className="footer-sub-heading">Sizing</h4>
        </div>
        <div className="footer-shop">
          <h3 className="footer-heading">Shop</h3>
          <h4 className="footer-sub-heading">All products</h4>
          <h4 className="footer-sub-heading">Bedroom</h4>
          <h4 className="footer-sub-heading">Dinning Room</h4>
        </div>
        <div className="footer-legalstuff">
          <h3 className="footer-heading">Legal Stuff</h3>
          <h4 className="footer-sub-heading">Shipping & Delivery</h4>
          <h4 className="footer-sub-heading">Terms & Condition</h4>
          <h4 className="footer-sub-heading">Privacy & Policy</h4>
        </div>
      </div>
      <div className="footer-content-copyright">
        <p className="footer-sub-heading">Copright 2023, All rights reserved</p>
      </div>
    </div>
  );
}
