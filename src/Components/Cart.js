import React from 'react';

const Cart = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div>
      <h3>Shopping Cart</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
