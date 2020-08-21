import React from 'react'
import {Link} from 'react-router-dom';
import def from '../images/def.jpg';
import PropTypes from 'prop-types';

export default function Room({room}) {
    const {name,slug,images} = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || def} alt="single room" />
 {/*                <div className="price-top">
                    <h6>‎₪{price}</h6>
                    <p>ללילה</p>
                </div>  */}
                <Link to={`/rooms/${slug}`} 
                className="btn-primary2 room-link" >
                    לפרטים
                </Link>           
            </div> 
            <p className="room-info">{name}</p>   
        </article>
    );
}

Room.prototype={
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired
    })
};