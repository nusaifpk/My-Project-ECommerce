// import React, { createContext, useContext, useReducer } from 'react';
// import toast from 'react-hot-toast';

// const CartContext = createContext(); 

// const CartProvider = ({ children }) => {
//   const initialState = {
//     cartItems: [],
//   };

//   const cartReducer = (state, action) => {
//     switch (action.type) {
//       case 'ADD':
//         return {
//           ...state,
//           cartItems: [...state.cartItems, action.value],
//         };
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   const addToCart = (product) => {
//     console.log('Adding to cart:', product);
//     dispatch({ type: 'ADD', value: product }); 
//     toast.success("Product added to cart")
//   };

//   return (
//     <CartContext.Provider value={{ cart: state, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// const useCart = () => {
//   return useContext(CartContext);
// };

// export { CartProvider, useCart }; 
