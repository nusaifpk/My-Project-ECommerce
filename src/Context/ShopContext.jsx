// import React, { createContext, useState } from 'react'
// import Products from '../UI/ProductsList'
// import { useContext } from 'react'

// export const ShopContext = createContext(null)

// const getDefaultCart = () => {
//     let cart= {};
//     for (let i=1;i<Products.length + 1;i++) {
//         cart[i] = 0;
//     }
//     return cart;
// }


// const ShopContexts = (props) => {

//     const [cartItems,setCartItems] =useState(getDefaultCart)

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({...prev,[itemId]:prev[itemId] + 1}))
//     }
//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({...prev,[itemId]:prev[itemId] - 1}))
//     }

//     const contextValue = {cartItems,addToCart,removeFromCart}
//     console.log(cartItems);

//   return (
//     <ShopContext.Provider value={contextValue}>
//         {props.children}
//     </ShopContext.Provider>
//   )
// }

// export default ShopContexts