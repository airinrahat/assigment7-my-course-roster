/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
// import { FaBeer } from 'react-icons/fa';

const Card = ({ card,handleAddToBookmark }) => {
  const {img,courseName,details,price,credit,button} =card;
    return (
        <>
           <div className='  border-red-100'>
          <div className='w-9/12'>
          <img className='w-full' src={img} alt="" />
           <h2 className='text-3xl font-bold'>{courseName}</h2>
           <p>{details}</p>
           <div className='flex '>
           <div>
            
               <span>Price:{price}</span>
           </div>
           <div>
            <h4>Credit:{credit}hr</h4>
           </div>
           </div>
           <button onClick={handleAddToBookmark} className='bg-[#2F80ED] px-24 py-2 my-4 text-white'>{button}</button>
           

          </div>
        
            
           
     
       
        </div>
        </>
       
    );
};
Card.propType = {
    card: PropTypes.object.isRequired
}
export default Card;