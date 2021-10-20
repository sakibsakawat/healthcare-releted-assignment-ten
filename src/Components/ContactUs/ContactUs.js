import React from 'react';
import './ContactUs.css'
import {Link } from 'react-router-dom'
const Social = () => {
    return (
        <div className="contactDiv1">


          <h4>For Any Help Please Contact Us via Social Media</h4>

            <div>
              
             
             
             
             <Link to="/https://facebook.com" ><i class="fab fa-facebook-square"></i></Link>
             <Link to="/https://twitter.com" ><i class="fab fa-twitter-square"></i></Link>
             <Link to="/https://youtube.com" ><i class="fab fa-youtube-square"></i></Link>
             <Link to="/https://instagram.com" ><i class="fab fa-instagram-square"></i></Link>
             <Link to="/https://mail.google.com.com" ><i class="fas fa-comment"></i></Link>
             
             
             
             
             <div></div>

            </div>
        </div>
    );
};

export default Social;