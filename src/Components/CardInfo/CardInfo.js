import React from 'react';
import { useParams } from 'react-router-dom';

const CardInfo = () => {
    const {cardId} = useParams();
    return (
        <div>
            <h1>this is Card info Page: {cardId}</h1>
            
        </div>
    );
};

export default CardInfo;