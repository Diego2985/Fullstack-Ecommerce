import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../Components/Breadcrums/Breadcrum.jsx'

const Product = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e) => e.id === Number(productId));
  return (
    <div>
       <Breadcrum product={product}/>    
    </div>
  )
}

export default Product