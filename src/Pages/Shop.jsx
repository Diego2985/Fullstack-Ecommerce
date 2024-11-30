import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';


const Shop = ( { theme } ) => {
  
  return (
    <div>
      <Hero theme={theme}/>
      <Popular theme={theme}/>
      <Offers theme={theme}/>
    </div>
  )
}

export default Shop


