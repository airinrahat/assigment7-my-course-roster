/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import'./Home.css'
import Card from '../Card/Card';
import { FaDollarSign,FaCreditCard } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [allCard,setAllcard] =useState([]);
    const [selectCard,setSelectCard] =useState([]);
    const[remainng,setRemainng]=useState(0);
    const[totalcost,setTotalcost]=useState(0)

    useEffect(() =>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllcard(data))
    },[]);

    const handleSelectCourse = (card) =>{
        const isExit=selectCard.find(item =>item.id == card.id);
        let count =card.credit;
        if(isExit){
          return   toast('already added')
        }
        else{
            selectCard.forEach(item => {
                count =count + item.credit;
            });
            console.log(count);

            const totalRemainng= 20 -count;
             
           

            if(count > 20){
            toast('Your hour is over')

            }
          else{
            setTotalcost(count);
            setRemainng(totalRemainng);
            setSelectCard([...selectCard,card]);
          }
           
        }

     
      
    };
    return (
        <><header>
            <h2>Course Registration</h2>
        </header><div className='container'>

                <div className="home-container">
                    <div className="card-container">
                        {allCard.map((card) => (
                            <div key={card.id} className="card">
                                <div className="card-img">
                                    <img className='photo' src={card.img} alt="" />
                                </div>
                                <h3>{card.courseName}</h3>
                                <p>{card.details}</p>
                                <div className="info">
                                    <p><FaDollarSign/> Price : {card.price} </p>
                                    <p><FaCreditCard/> Credit : {card.credit} hr</p>
                                </div>
                                <button onClick={()=>handleSelectCourse(card)} className='card-btn'>Select</button>
                                <ToastContainer />
                            </div>
                        ))}
                    </div>
                    <div className="course">
                       <Card selectCard={selectCard}
                       remainng={remainng}
                       totalcost={totalcost}
                       >
                        
                       </Card>

                    </div>
                </div>
            </div></>
        
    );
};

export default Home;