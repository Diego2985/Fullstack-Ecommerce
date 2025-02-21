import React, { createContext } from 'react'
import { products } from '../Components/Assets/data/products';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = {products};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    );
};

export default ShopContextProvider;