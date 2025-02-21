import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/data/new_collections'
import Item from '../Item/Item'

const NewCollections = ({theme}) => {
  return (
    <div className={`new-collections ${theme}`}>
        <h1>NUEVAS COLECCIONES</h1>
        <hr />
        <div className="collections">
           {new_collection.map((item, i) => {
             return <Item key={i} id={item.id}
             name={item.name} image={item.image}
             price={item.price}/>
           })}
        </div>
    </div>
  )
}

export default NewCollections