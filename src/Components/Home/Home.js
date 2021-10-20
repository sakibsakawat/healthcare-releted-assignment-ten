import React from 'react';
import Slider from '../Slider/Slider';
import Services from '../Services/Services';
import Working from '../Working/Working';

const Home = () => {
    return (
        <div>
          <div><Slider></Slider> </div>
          
          <div>< Working></ Working> </div>

          <div><Services></Services></div>
          
          
        </div>
    );
};

export default Home;