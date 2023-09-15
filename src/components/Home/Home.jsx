/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from '../CourseCard/Card';

const Home = () => {
    const [data,setData] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        // <div className='w-3/4'>
        <div>
            <div className='grid grid-cols-3 mt-2  '>
                {/* <div className=' border-4 border-red-400'> 

                <img src="https://i.ibb.co/ngtB4PS/person-front-computer-working-html.jpg" alt="" /> */}
                
            
             {
                    data.map(card =>
                         <Card key={card.id} 
                         card={card}>

                         </Card>)
                }
           

            </div>
        </div>
    );
};

export default Home;