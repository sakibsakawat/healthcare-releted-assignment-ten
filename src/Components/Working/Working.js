import React from 'react';
import {Link,} from "react-router-dom";
import './Working.css'

const Working = () => {
     
    return (
        <div className="d-flex  align-items-center justify-content-around workingMain mb-5">



           
           
           <div className="p-5  text-start ">
           <h2 className="workingH2"> <i class="far fa-clock"></i> Working Hour</h2>
            <h5>Please check below for our working hours throughout <br/> the week excluding national holidays</h5>
           <div className="d-flex">
            <div className="weekDiv mt-3" >
            <h5 className="blue">Monday — Friday</h5><br/><h5 className="blue">Saturday — Sunday</h5></div>
           <div className="weekDiv mt-3 ms-5" ><h5 className="blue">9:00AM — 10:00PM</h5><br/><h5 className="blue">10:00AM — 9:00PM</h5></div>
           </div>
           </div>


           
           
           
         
             <div className="p-5 text-start ">
             <h2 className="workingH2"> <i class="fas fa-heartbeat"></i> Doctors availability</h2>
                <h4 className="mb-4 mt-4">Our doctors are available most of the week and if not <br/> you can always book appointment with other available <br/> doctors on our panel of expert doctors.</h4>
                <Link className="drBtn" to="/services"> Meet Our Doctors</Link>
             </div>
               
           




        </div>
    );
};

export default Working;