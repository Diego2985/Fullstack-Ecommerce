import React, { useContext, useState } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/img/dropdown.png'


const ShopCategory = (props) => {
  const {products} = useContext(ShopContext)
  const [productLimit, setProductLimit] = useState(12);
  

  // Mapeo de categorías (inglés -> español)
  const categoryMap = {
    men: 'hombre',
    women: 'mujer',
  };

  // Convertir categoría a español
  const categoryToFilter = categoryMap[props.category.toLowerCase()] || props.category.toLowerCase();

  // Filtrar productos por categoría
  const filteredProducts = products.filter(
    (producto) => producto.category.toLowerCase() === categoryToFilter
  );

  // Mostrar solo 12 productos
  const limitedProducts = filteredProducts.slice(0, 12);


 
  return (
    <div className='container'>
        <div className='shopcategory -container'>
            <img className='shopcategory-banner' src={props.banner} alt="" />  
            <div className="shopcategory-indexSort">
                <p>
                    <span>Mostrar 1-{limitedProducts.length}</span> fuera de los {' '}
                    {filteredProducts.length} productos
                </p>
                <div className="shopcategory-sort">
                   Filtrar por <img src={dropdown_icon} alt="" />
                </div>
            </div>
                 <div className="container">
                   <div className="shopcategory-products">
                      {limitedProducts.map((product, index) => (
                        <div key={index} className="shopcategory-product-item">
                              <img src={product.image} alt={product.name} />
                                    <p>{product.name}</p>
                                    <p>${product.price}</p>
                       </div>          
                     ))} 
                 </div> 
      </div>
      {productLimit < filteredProducts.length && (
      <div className="shopcategory-loadmore"
      onClick={() => setProductLimit(productLimit + 12)}>
        Explorar más
      </div>
      )}
    </div>
  </div> 
  ) 
}

export default ShopCategory