/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import'./Card.css'

const Card = ({selectCard,remainng,totalcost}) => {
    
    return (
        <div>
            
            <h4 className='reamaing'>Credit Hour Remaining: {remainng}hr</h4><hr/>
            <h3>Course Name</h3>
           
            
            {selectCard.map((card) =>(
                <li key={card.id}> {card.courseName} </li>

            ))}
            <hr/>
                    
                    <h5>Total Credit Hour : {totalcost}</h5>    
            
        </div>
    );
};

export default Card;