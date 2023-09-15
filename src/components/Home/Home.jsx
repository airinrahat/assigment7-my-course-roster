/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [data,setData] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className='w-3/4'>
            <div>
                {/* <div className='w-60 h-80 border-4 border-red-400'>  */}
                <div className=' border-4 border-red-400'> 

                <img src="https://i.ibb.co/ngtB4PS/person-front-computer-working-html.jpg" alt="" />
                <h3>data:                    {data.length}
</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;