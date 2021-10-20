import React from 'react';
import { useEffect, useState } from "react";
import Card from '../Card/Card'
import './Cards.css'










const Cards = () => {
     const [cards, setCards ] = useState([]);
   useEffect(() => {
       fetch('./fakedata1.JSON')
       .then(res => res.json())
       .then(data => setCards(data));
   },[])

    return (
        <div className="cardsDiv1 ">
         <h1 className="cardsH1 mb-5"><span className="cardsH1Span1">Our</span> <span className="cardsH1Span2">Doctors</span></h1>




         <div className="cardsDiv2 container">

         
           {
               cards.map(card => <Card
                key={card.key}
                card={card}
               
               ></Card>)
           } 


         </div>




        </div>
    );
};

export default Cards;