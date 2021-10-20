import React from 'react';
import './Footer.css'
import logo from '../../images/l1.png'
const Footer = () => {
    return (
        <div className="footerMain mt-5">
            <div className="d-flex align-items-center">
            
            <div><img src={logo} alt="" className="footerImg"/></div>

           <div class="text-start  ">
                 <h2 className="mt-4"> Med Care</h2>
                  <div>
                   <p>plot 15, Road 71, Gulshan <br/>Dhaka 1212, Bangladesh</p>           
                     
                  </div>         
                 
                 <h5> CHITTAGONG INFO CENTER</h5>
                  <div>
                   <p>23/A, M M Ali Road, Golpahar Moor <br/> Mehdibag, Chittagong.<br/>Dhaka 1212, Bangladesh</p>           
                   
                  </div>
                 
                 <h5> SYLHET INFO CENTER</h5>
                  <div>
                   <p>21 Niloy, Gour Govinda Tila Road <br/>(Behind the Muktijoddha Complex, <br/>Near Noorjahan Clinic),Chowhatta, Sylhet<br/>Dhaka 1212, Bangladesh</p>    
                  </div>
           </div>
           
           
           
           
           
            <div className="ms-5 mt-5 text-start socialTop ">
                <h2>Social Media</h2>
                <div>
                     
                     <i className="fab fa-facebook-square fs-2 mx-2 fc1"></i>
                     <i className="fab fa-twitter-square fs-2 mx-2 fc2"></i>
                     <i className="fab fa-instagram-square fs-2 mx-2 fc3"></i>
                     <i className="fab fa-youtube-square fs-2 mx-2 fc4"></i>
                 </div>
                 <div className="d-flex flex-column justify-content-start mt-4">
                       <h2 >Social Pages</h2>
                       <p>Brief History <br/>Mission Statement<br/>People and Diversity<br/>Operation Team<br/></p>
                       
                 </div>



            </div>

            
            
            
            
            
            </div>
            <div className="bg-dark text-white"> Made By Sakawat Hossain - Authorized by Programming Hero</div>
        </div>
    );
};

export default Footer;