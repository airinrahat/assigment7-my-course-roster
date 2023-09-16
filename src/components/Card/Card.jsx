/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import'./Card.css'

const Card = ({selectCard}) => {
    
    return (
        <div>
            <h3>Course Name</h3>
            {selectCard.map((card) =>(
                <li key={card.id}> {card.courseName} </li>

            ))}
                    
                
            
        </div>
    );
};

export default Card;