import React from 'react'
import './Item.css'

const Item = (props) => {

  console.log("Item Props:", props);

  return (
    <div className='item'>
        <img src={props.image} alt="item"/>
        <p>{props.name}</p>
            <div className="item-prices">
                ${props.price}
            </div> 
    </div>
  )
}

export default Item