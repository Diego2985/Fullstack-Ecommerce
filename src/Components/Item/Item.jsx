import React, { useEffect } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Item = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
 
  return (
    <div className='item' data-aos="zoom-in">
        <Link to={`/product/${props.id}`}>
          <img src={props.image} alt="{props.name}"/>
        </Link>
        <p>{props.name}</p>
            <div className="item-prices">
                ${props.price}
            </div> 
    </div>
  )
}

export default Item