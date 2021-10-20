import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceInfo = () => {
    const {serviceId,img} = useParams();
    return (
        <div>
            <h1>this is Service info Page: {serviceId}</h1>
            <div><img src={img} alt=""/></div>
        </div>
    );
};

export default ServiceInfo;