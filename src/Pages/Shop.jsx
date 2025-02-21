import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';




const Shop = ( { theme } ) => {
  
  return (
    <div>
      <Hero theme={theme}/>
      <Popular theme={theme}/>
      <Offers theme={theme}/>
      <NewCollections theme={theme}/>
      <NewsLetter theme={theme}/> 
         
    </div>
  )
}

export default Shop


