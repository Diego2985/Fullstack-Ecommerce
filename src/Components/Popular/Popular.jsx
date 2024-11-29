import React from 'react'
import './Popular.css'
import  data_product  from '../Assets/data/data'
import Item from '../Item/Item'

const Popular = ({ theme }) => {
  return (
    <div className={`popular ${theme}`}>
       <h1>POPULAR ENTRE LAS MUJERES</h1>
       <hr /> 
       <div className="popular-item">
         {data_product.map((item, i) => {
          return <Item key={i} id={item.id}
                   name={item.name} image={item.image}
                   price={item.price}/>
         })}
       </div>       
    </div>
  )
}

export default Popular

