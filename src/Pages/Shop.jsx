import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';


const Shop = ( { theme } ) => {
  
  return (
    <div>
      <Hero theme={theme}/>
      <Popular theme={theme}/>
    </div>
  )
}

export default Shop


