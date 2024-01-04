import React from 'react'
import '../Styles/ProductsCard.css'
import { Link } from 'react-router-dom'

const ProductsCard = ({product}) => {

  return (
    <div className='product-card'>
        <img src={product.imageUrl} alt={product.name} className='imgcard' />
        <h4>{product.name}</h4>
        <h5>{product.category}</h5>
        <p>₹{product.price}/-</p>        
        <Link to={`${product.id}`} ><button className='btn-to-view'>View Product</button></Link>
    </div>
  )
}

export default ProductsCard