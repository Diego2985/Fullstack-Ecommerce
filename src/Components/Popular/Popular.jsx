import React from 'react'
import './Popular.css'
import  data_product  from '../Assets/data/data'
import Item from '../Item/Item'

const Popular = ({ theme }) => {
  return (
    <div className={`popular ${theme}`}>
       <h1 data-aos="fade-up" data-aos-duration="800">POPULAR ENTRE LAS MUJERES</h1>
       <hr data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" /> 
       <div className="popular-item">
  {data_product.map((item, i) => (
    <div data-aos="zoom-in" data-aos-delay={`${i * 100}`} key={item.id}>
      <Item
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
      />
    </div>
  ))}
</div>
</div>
  )
}

export default Popular

