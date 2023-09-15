/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
const Card = ({ card  }) => {
    console.log(card);
    return (
        <div>
            
        </div>
    );
};
Card.propType = {
    card: PropTypes.object.isRequired
}
export default Card;