import React, { useState } from 'react';
import '../Styles/Cart.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Cart = ({ cartItems, removeFromCart }) => {

  const [quantities, setQuantities] = useState({});


  // increment product quantity
  const IncProductQty = (productId) => {
    setQuantities((prevQuantities) => {
      const updatedQuantity = (prevQuantities[productId] || 1) + 1;
      return {
        ...prevQuantities,
        [productId]: updatedQuantity,
      };
    });
  };

  // decrement product quantity
  const DecProductQty = (productId) => {
    setQuantities((prevQuantities) => {
      if (prevQuantities[productId] > 0) {
        return {
          ...prevQuantities,
          [productId]: prevQuantities[productId] - 1,
        };
      }
      return prevQuantities;
    });
  };

  // price increse to curresponding qty
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price);
    const quantity = quantities[item.id] || 1;

    if (!isNaN(itemPrice)) {
      return total + itemPrice * quantity;
    }
    return total;
  }, 0);


  // remove the particular product
  const handleDelFromCart = (productId) => {
    removeFromCart(productId);
  };

  

  return (
    <div className='list__card'>
    <h3>Your Cart</h3>
    {cartItems.map((product) => (
      <div className='list__product' key={product.id}>
        <img src={product.imageUrl} alt={product.name} className='cart__img' />
        <div className='list__datas'>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <p><b>₹{parseFloat(product.price) * (quantities[product.id] || 1)}</b></p>

          <div className="quantity__buttons">
            <Button onClick={() => DecProductQty(product.id)} className='btn__quantity'>-</Button>
            <span className="quantity">{quantities[product.id] || 1}</span>
            <Button onClick={() => IncProductQty(product.id)} className='btn__quantity'>+</Button>
          </div><br />

          <button onClick={() => handleDelFromCart(product.id)} className='btn__del'>Remove</button>
        </div>
      </div>
    ))}

    <div className='total__price'>
      <Link to='/shop'><button className='btn__add'>Add More</button></Link><br /><br />
      <strong>Total Price: ₹{totalPrice.toFixed(2)}</strong>
    </div>

    <div className='btns__cart'>
      <Link to='/billpage'><button className='btn_buy'>Buy Now</button></Link>
    </div>
  </div>
  );
};

export default Cart;
