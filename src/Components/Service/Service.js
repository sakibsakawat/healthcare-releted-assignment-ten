import React from 'react';
import {Link,} from "react-router-dom";
import './Service.css'

const Service = (props) => {
     const {name, Profession, key, img,} = props.service
    return (
        <div className="">
           
           
           
           
           
           
           <div className="card" >
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h1 className="card-title">{name}</h1>
    <p className="card-text fs-4">{Profession}</p>
  </div>
   <div className="card-body">
    <Link to={`/serviceinfo/${key} ${img}`}><button className="container-fluid detailsBtn" >Details</button></Link>
    
  </div>
</div>
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
            
        </div>
    );
};

export default Service;