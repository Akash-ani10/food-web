import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Artichoke Dip & Beef Stew: A cozy bistro. Artichoke hearts, spinach, five cheeses—a warm embrace. Beef stew: tender chunks, peppery gravy, hidden treasures. Food as memory, culture, and soul.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
        <h2>A͙A͙A̷  ¢σмραηу</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>privacy policy</li>
            </ul>

          </div> 
          <div className="footer-content-right">
            <h2>Get In Touch </h2>
            <ul>
              <li>+91-999-013-0010</li>
              <li>tomato@gmail.com</li>
            </ul>
            
          </div>


      </div>
      <hr />
      <p className='footer-copyright'>copyright 2024 ⓒ Tomato.com -All rights reserved</p>
      
    </div>
  )
}

export default Footer