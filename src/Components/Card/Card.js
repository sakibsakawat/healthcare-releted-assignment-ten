import React from 'react';
import {Link,} from "react-router-dom";
import './Card.css'

const Card = (props) => {
     const {name, description, key, img,} = props.card
    return (
        <div>
             <div className="row row-cols-1 row-cols-md g-4">
  <div className="col">
    <div className="card cardHeight">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h2 className="card-title AbrilFatface">{name}</h2>
        <p class="card-text">{description}</p>
        
      </div>
      <div class="card-footer">
        <small class="text-muted"><Link to={`/serviceinfo/${key}`}><button className="container-fluid detailsBtn" >Details</button></Link></small>
      </div>
    </div>
  </div>
         </div>
        </div>
    );
};

export default Card;