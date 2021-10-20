import React from 'react';
import { useEffect, useState } from "react";
import Service from '../Service/Service'
import './Services.css'










const Services = () => {
     const [services, setServices ] = useState([]);
   useEffect(() => {
       fetch('./fakedata.JSON')
       .then(res => res.json())
       .then(data => setServices(data));
   },[])

    return (
        <div className="servicesDiv1 ">
         <h1 className="servicesH1 mb-5"><span className="servicesH1Span1">Our</span> <span className="servicesH1Span2">Doctors</span></h1>




         <div className="servicesDiv2 container">

         
           {
               services.map(service => <Service
                key={service.key}
                service={service}
               
               ></Service>)
           } 


         </div>




        </div>
    );
};

export default Services;