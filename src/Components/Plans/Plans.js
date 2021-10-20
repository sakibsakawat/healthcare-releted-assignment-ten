import React from 'react';
import {Link,} from "react-router-dom";
import './Plans.css'
import mother from '../../images/mother.png'
const  Plans = () => {
     
    return (
        <div claasName="planMain">
           
           <div claasName="" >
               <div>
                     <div claasName="">
                     <h1>We provide quality care <br/> that treats everyone.</h1>
                     <h4>We provide primary care when you need it, get personalized <br/> and high quality healthcare by talking to top medical doctors.</h4>
                </div>
                <div claasName="d-flex">
                     <div claasName="icon"><i class="far fa-user-circle fa h-100"></i></div>
                     <div><i class="fas fa-baby-carriage fa"></i></div>
                     <div><i class="fas fa-users fa"></i></div>
                
                
                
                     </div>
               </div>

               <div><img src={mother} alt=""/></div>







           </div>
           
      </div>
    );
};

export default Plans;